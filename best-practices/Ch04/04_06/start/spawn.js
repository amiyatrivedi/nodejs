/**
* Abdennour < https://cv.abdennoor.com>
*/
((g)=>{
   ((rq,ps,echo,C,file,dir,mod,xp,delay,nDelay,job,nJob)=>{
        //
       (($)=>{
          let cp=$('node',['alwaysTalking']);
          cp.stdout.on('data',function(data){
             echo.log(`STDOUT is : ${data}`)
          });
          cp.on("close",function(){
            echo.log("Child process has ended");
            ps.exit();
          });

          delay(()=>{
            cp.stdin.write("stop");
          },4000);
       })(rq('child_process').spawn)
   })(require,g.process,g.console,g.Class,g.__filename,g.__dirname,g.module,g.exports,g.setTimeout,g.clearTimeout,g.setInterval,g.clearInterval)


})(global)
