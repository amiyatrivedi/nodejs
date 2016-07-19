/**
* Abdennour < https://cv.abdennoor.com>
*/
((g)=>{
   ((rq,ps,echo,C,file,dir,mod,xp,delay,nDelay,job,nJob)=>{
        //
       ((Evt,util)=>{
         var Person=function(name){
           this.name=name;
           return this;
         };
         util.inherits(Person,Evt.EventEmitter);
         mod.exports=Person;
       })(rq('events'),rq('util'))
   })(require,g.process,g.console,g.Class,g.__filename,g.__dirname,module,g.exports,g.setTimeout,g.clearTimeout,g.setInterval,g.clearInterval)

})(global)
