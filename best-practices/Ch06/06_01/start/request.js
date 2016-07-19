((http,JFile)=>{
  var mur=new JFile('rum.txt').text;
  console.log(mur);

  http.createServer((req,res)=>{
       res.writeHeader(200,{'Content-Type':'text/html'});
      if(req.url ==="/mur"){
          res.end(mur);
      }else{
        res.end(`
             <h1>Introduction</h1>
          `)
      }

  }).listen(3031);

})(require('http'),require('jfile'))
