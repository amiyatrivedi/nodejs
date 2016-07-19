/**
* Abdennour < https://cv.abdennoor.com>
*/
((g)=>{
   ((rq,ps,echo,C,file,dir,mod,xp,delay,nDelay,job,nJob)=>{
        //
        ((Evt,util)=>{
          let emitter = new Evt.EventEmitter();
          emitter.on('customEvt',function(message,status){
               echo.log(`${status} : ${message}`)
          });
          emitter.emit('customEvt','Salem',200);
//-----step2-----
          var Person=function(name){
            this.name=name;
            return this;
          };
          util.inherits(Person,Evt.EventEmitter);
          let ahmed =new Person('Ahmed Mahmoud');
          ahmed.on('speak',function(said){
                  echo.log(`${this.name} says : ${said}`);
          });

          ahmed.emit('speak','Ahlen w Sahlen');

        })(rq('events'),rq('util'));
   })(require,g.process,g.console,g.Class,g.__filename,g.__dirname,g.module,g.exports,g.setTimeout,g.clearTimeout,g.setInterval,g.clearInterval)

})(global)
