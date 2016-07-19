/**
* Abdennour < https://cv.abdennoor.com>
*/
((g)=>{
   ((rq,ps,echo,C,file,dir,mod,xp,delay,nDelay,job,nJob)=>{
        //

       ((path,util,v8)=>{
          // echo.log(path.basename(file));
           let dirUploads=path.join(dir,'www','files','uploads');
           echo.log(dirUploads);

           util.log(dirUploads); //log with timestamp
           util.log(v8.getHeapStatistics())
       })(rq('path'),rq('util'),rq('v8'))

   })(require,g.process,g.console,g.Class,g.__filename,__dirname,g.module,g.exports,g.setTimeout,g.clearTimeout,g.setInterval,g.clearInterval)

})(global)
