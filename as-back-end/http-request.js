(function(http,ps,echo){
  //  var opts={host:'www.bing.com',port:80,path:'/',method:'GET'}
    var opts='http://www.bing.com';
     echo('..after while, request will be started')
     var req=http.request(opts,function(res){
            echo('status : '+res.statusCode);
          //  res.pipe(ps.stdout);
     });
     req.end();
})(require('http'),require('process'),function(m){console.log(m)})
