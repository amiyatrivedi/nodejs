/**
* Abdennour < https://cv.abdennoor.com>
*/
((g)=>{
   ((rq,ps,echo,C,file,dir,mod,xp,delay,nDelay,job,nJob)=>{
        //
        ps.stdout.write("Salem ");
        ps.stdout.write("Alykom \n\n\n\n");
        let questions=[
          'What is your name?',
          'What is your fav hobby?',
          'What is the best lang?'
        ]
        let answers=[];
        let ask=function(i){
            ps.stdout.write(`\n\n\n\n${questions[i]}`);
            ps.stdout.write("  >  ") ;

        };
        //ask(1);
        //listener
        ask(0);
        ps.stdin.on('data',(data)=>{
            //  ps.stdout.write('\n'+data.toString().trim()+'\n');
            answers.push(data.toString().trim());
            if( answers.length<questions.length){
              ask(answers.length);
            }else{
              ps.exit();
            }


        });
        ps.on('exit',()=>{
           ps.stdout.write('\n\n\n\n');
           ps.stdout.write(`${answers[0]} likes ${answers[1]} , And the preffered lang is ${answers[2]}`);
           ps.stdout.write('\n\n\n\n');
        })
   })(g.require,g.process,g.console,g.Class,g.__filename,g.__dirname,g.module,g.exports,g.setTimeout,g.clearTimeout,g.setInterval,g.clearInterval)

})(global)
