/**
* Abdennour < https://cv.abdennoor.com>
*/
((g)=>{
   ((rq,ps,echo,C,file,dir,mod,xp,delay,nDelay,job,nJob)=>{

         echo.log(ps.argv);

        //Run : # node app.js --user Ahmed --greeting "Peace upon to you"
        ((grap)=>{
             let greeting = grap('--greeting');
             let user = grap('--user');
             if(!user || ! greeting){
               echo.log("You blew it !")
             }else{
               echo.log(` Welcome ${user} ,${greeting}`)
             }
        })(function(flag){
             let index=ps.argv.indexOf(flag);
             return (index === -1) ? null : ps.argv[index+1];
        })

   })(g.require,g.process,g.console,g.Class,g.__filename,g.__dirname,g.module,g.exports,g.setTimeout,g.clearTimeout,g.setInterval,g.clearInterval)

})(global)
