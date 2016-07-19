/**
* Abdennour < https://cv.abdennoor.com>
*/
((g)=>{
   ((rq,ps,echo,C,file,dir,mod,xp,delay,nDelay,job,nJob)=>{
        //
       ((fs,path)=>{
         let pathFile=dir+'/lib/sayings.md';
         let contents=fs.readFileSync(pathFile,'UTF-8');

         echo.log(contents);
         let contentsBinary=fs.readFileSync(pathFile);
//------- asynchrounsly
          fs.readFile(pathFile,(er,data)=>{
               if(er) throw er;
               echo.log(data);
          });
          echo.log('Async reading...')
          //------ Read dir & its files
          fs.readdir(dir+"/lib",(err,files)=>{
              files.forEach((fileName)=>{
                let file=path.join(dir,"lib",fileName);
                let stats=fs.statSync(file);
                if(stats.isFile()){
                  fs.readFile(file,"UTF-8",(err,data)=>{
                    echo.log(data);
                  })
                }
              })
          //
          })

       })(rq('fs'),rq('path'))
   })(require,g.process,g.console,g.Class,g.__filename,__dirname,g.module,g.exports,g.setTimeout,g.clearTimeout,g.setInterval,g.clearInterval)

})(global)
