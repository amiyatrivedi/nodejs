/**
* Abdennour < https://cv.abdennoor.com>
*/
((g)=>{
   ((rq,ps,echo,C,file,dir,mod,xp,delay,nDelay,job,nJob)=>{
        //
        ((RL)=>{
          let rl=RL.createInterface(ps.stdin,ps.stdout);
          let person={};person.sayings=[];
          rl.question("What's you name? ",function(answer){
            //echo.log(answer);
            person.name=answer;
            rl.setPrompt(`What whould ${person.name} say? `);
            rl.prompt();
            rl.on('line',(say)=>{
            //  echo.log(say.trim());
              if(say.toLowerCase().trim()==='exit'){
                rl.close();
              }else{
                person.sayings.push(say.trim());
                rl.setPrompt(`What else would ${person.name} say ? (exit to leave ) `)
                rl.prompt();
              }

            });
            rl.on('close',()=>{
              echo.log("%s is person who said %j",person.name,person.sayings);
              ps.exit();
            })
          });
        })(rq('readline'))

   })(require,g.process,g.console,g.Class,g.__filename,g.__dirname,g.module,g.exports,g.setTimeout,g.clearTimeout,g.setInterval,g.clearInterval)

})(global)
