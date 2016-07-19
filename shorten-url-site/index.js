((shorten,http,path,fs,serveAll)=>{
    var params=function(req){
      let q=req.url.split('?'),result={};
      if(q.length>=2){
          q[1].split('&').forEach((item)=>{
               try {
                 result[item.split('=')[0]]=item.split('=')[1];
               } catch (e) {
                 result[item.split('=')[0]]='';
               }
          })
      }
      return result;
    }
    console.log(shorten('https://google.com'));
    console.log(shorten('http://abdennoor.com'));
    console.log(shorten('https://cv.abdennoor.com','my-cv'));
    var PORT=4041;
    http.createServer(function(req,res){

       req.params=params(req);
       console.log(req.params);
       serveAll(req,res,fs,path,shorten);
    }).listen(PORT);
    console.log(`Server listen on ${PORT}`);

})(require('simple-short'),require('http'),require('path'),require('fs'),function(request,response,fs,path,shorten){
   if(request.url.startsWith('/res/add')){

     let result;
     let p_url=decodeURIComponent(request.params.url);
     if(request.params.sug && request.params.sug.length){
          result=shorten(p_url,request.params.sug);
          if(result){
            result=request.params.sug;
          }
     }else{
         result=shorten(p_url);
         console.log("genereated : ",result);
     }
     response.writeHead(200, { 'Content-Type': 'application/json' });
     response.end(JSON.stringify({sid:result}));


   }else{
     var filePath = '.' + request.url;
     if (filePath == './')
         filePath = './index.html';

     var extname = path.extname(filePath);
     var contentType = 'text/html';
     switch (extname) {
         case '.js':
             contentType = 'text/javascript';
             break;
         case '.css':
             contentType = 'text/css';
             break;
         case '.json':
             contentType = 'application/json';
             break;
         case '.png':
             contentType = 'image/png';
             break;
         case '.jpg':
             contentType = 'image/jpg';
             break;
         case '.wav':
             contentType = 'audio/wav';
             break;
     }

     fs.readFile(filePath, function(error, content) {
         if (error) {
             if(error.code == 'ENOENT'){
               let url=shorten(request.url.slice(1));
               if(url){
                 response.writeHead(301,{Location: url});
                 response.end();
               }else{
                 response.writeHead(400,{'Content-Type':'text/html'});
                 response.end(`<h1> "${request.url.slice(1)}" is not reserved yet </h1>


                 `);
               }
             }
             else {
                 response.writeHead(500);
                 response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
                 response.end();
             }
         }
         else {
             response.writeHead(200, { 'Content-Type': contentType });
             response.end(content, 'utf-8');
         }
     });

   }

});
