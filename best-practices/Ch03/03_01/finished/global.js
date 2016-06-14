console.log("is the same as the next");
global.console.log("gloab is alternative of window object . But not in all sides");
var path = require("path");

console.log(`this is dir name var : ${__dirname}`);
console.log(`However this is file name : ${__filename}`);
console.log(`Rock on World from ${path.basename(__filename)}`);


((g)=>{
   ((rq,ps,echo,C,file,dir,mod,xp,delay,nDelay,job,nJob)=>{
      let job1=job(()=>{
           echo.log(`time now is ${new Date()}`);
      },2000);
      delay(()=>{
        nJob(job1);
      },7000);

   })(g.require,g.process,g.console,g.Class,g.__filename,g.__dirname,g.module,g.exports,g.setTimeout,g.clearTimeout,g.setInterval,g.clearInterval)

})(global)
