(function(Rsc,api,echo){

    api.r=new Rsc(3);
    api.r.on('start',function(){
        echo('Divisiable by 3 process start');
    });
    api.r.on('end',function(){
        echo('end!');
    });
    api.r.on('divisble',function(d){
      console.log(d.d+' is divisble by 3');
    });
})(require('./resource'),{},function(m){console.log(m)})
