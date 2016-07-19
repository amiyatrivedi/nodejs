/**
* Abdennour < https://cv.abdennoor.com>
*/
((g)=>{
   ((rq,ps,echo,C,file,dir,mod,xp,delay,nDelay,job,nJob)=>{
        //
       ((fs)=>{
         let files = fs.readdirSync('/Users/abdennour');
         echo.log(files);
         //--- Async
         fs.readdir('/Users/abdennour/dev',(err,data)=>{
           if(err){
             throw err;
           }
           echo.log(data);
         });
         echo.log('reading ~/dev....')
       })(rq('fs'))
   })(require,g.process,g.console,g.Class,__filename,__dirname,g.module,g.exports,g.setTimeout,g.clearTimeout,g.setInterval,g.clearInterval)

})(global)
