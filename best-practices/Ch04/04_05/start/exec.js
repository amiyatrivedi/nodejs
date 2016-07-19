/**
* Abdennour < https://cv.abdennoor.com>
*/
((g)=>{
   ((rq,ps,echo,C,file,dir,mod,xp,delay,nDelay,job,nJob)=>{
        (($)=>{
          // $('open https://cv.abdennoor.com');
           //$('open -a Terminal .');
           $('ls',(err,stdout)=>{
               if(err){
                 throw err;
               }
               echo.log('Listing finished !');
               echo.log(stdout);
           });

           $('git version',(err,out)=>{
               echo.log(`Git version is ${out}`);
           })
        })(rq('child_process').exec)

   })(require,g.process,g.console,g.Class,g.__filename,g.__dirname,g.module,g.exports,g.setTimeout,g.clearTimeout,g.setInterval,g.clearInterval)

})(global)
