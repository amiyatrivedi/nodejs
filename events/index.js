(function(Evt,api,echo){

    api.getRsc=function(cnt){
          var evt=new Evt();
          var localCnt=0;
          var job=setInterval(function(){
              if((localCnt % cnt)===0){
                evt.emit('divisble',{t:new Date(),d:localCnt})
              }
              if(localCnt ==1){
                evt.emit('start');
              }
              if(localCnt> 100){
                  evt.emit('end');
                  clearInterval(job);
              }
              localCnt++;
          },1499);


          return evt;
    };

    var r=api.getRsc(6);
    r.on('start',function(){
        echo('Divisiable by 6 process start');
    });
    r.on('end',function(){
        echo('end!');
    });
    r.on('divisble',function(d){
      console.log(d.d+' is divisble by 6');
    })

  })(require('events').EventEmitter,{},function(m){console.log(m)})
