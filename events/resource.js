//Second pattern to define Event:Publush/Subscribe
(function(m,util,Evt){
       function Resource(cnt){
        // var evt=new Evt(); Not need because Resource extends Wvt
         var localCnt=0;
         var that=this;
         var job=setInterval(function(){
             if((localCnt % cnt)===0){
               that.emit('divisble',{t:new Date(),d:localCnt})
             }
             if(localCnt ==1){
               that.emit('start');
             }
             if(localCnt> 100){
                 that.emit('end');
                 clearInterval(job);
             }
             localCnt++;
         },1499);


         return this;
       }
       util.inherits(Resource,Evt);
       m.exports=Resource;
})(module,require('util'),require('events').EventEmitter)
