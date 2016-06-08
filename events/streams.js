(function(req,api,echo){
     var file=req('https://ethaq.nawat.co/d?uVwHVtujW6ioDrD');
     file.on('data',function(part){
       echo(part);
     });
     file.on('end',function(){
       echo('----done---');
     });
})(require('request'),{},function(m){console.log(m)})
