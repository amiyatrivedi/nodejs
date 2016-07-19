/**
* Abdennour < https://cv.abdennoor.com>
*/

((g)=>{
   ((rq,ps,echo,C,file,dir,mod,xp,delay,nDelay,job,nJob)=>{
        //
        ((fs)=>{
          var md= `
            # Introduction :
               this is a good library

            # Features :
               * Reactive
               * Proactive
          `;

          fs.writeFile(dir+"/writtenByNode.md",md.trim(),function(err){
                echo.log("File added..");
          });


        })(rq('fs'))

   })(require,g.process,g.console,g.Class,g.__filename,__dirname,g.module,g.exports,g.setTimeout,g.clearTimeout,g.setInterval,g.clearInterval)

})(global)
