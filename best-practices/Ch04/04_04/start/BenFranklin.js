/**
* Abdennour < https://cv.abdennoor.com>
*/
((g)=>{
   ((rq,ps,echo,C,file,dir,mod,xp,delay,nDelay,job,nJob)=>{
        //
        ((Evt,util,Person)=>{

         //see module lib/Person.js
          let ahmed =new Person('Ahmed Mahmoud');
          let rami=new Person('Rami Mleyat');
          ahmed.on('speak',function(said){
                  echo.log(`${this.name} says : ${said}`);
          });
          rami.on('speak',function(said){
            echo.log(`${this.name} -> ${said}`)
          })

          ahmed.emit('speak','Ahlen w Sahlen');
          rami.emit('speak','Bad company !!')
        })(rq('events'),rq('util'),rq('./lib/Person'));
   })(require,g.process,g.console,g.Class,g.__filename,g.__dirname,module,g.exports,g.setTimeout,g.clearTimeout,g.setInterval,g.clearInterval)

})(global)
