// run by cmd # sudo PORT=8080 HOST=localhost node run-server.js
(function(http,ps,fs,echo){
  //  var opts={host:'www.bing.com',port:80,path:'/',method:'GET'}
  echo(ps.env.PORT);
  http.createServer(function(req,res){
      res.writeHead(200,{'Content-Type':'text/html'});
      if(req.url === '/list'){
          fs.createReadStream(__dirname+"/catalog.html").pipe(res);
      }else{
          res.end('<h1>Salem Alem</h1>');
      }

  }).listen(ps.env.PORT,ps.env.IP);
  echo('server running!..');
  //echo('check : http://'+ps.env.IP+":"+ps.env.PORT+"/");
})(require('http'),require('process'),require('fs'),function(m){console.log(m)})
