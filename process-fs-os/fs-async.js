(function(fs,ps,echo){
   if(fs.existsSync('temp')){
     echo('directory exists');
     if(fs.existsSync('temp/new.txt')){
       fs.unlinkSync('temp/new.txt')
     }
     fs.rmdirSync('temp');
   }

   fs.mkdir('temp',function(err){
        fs.exists('temp',function(exists){
          if(exists){
            ps.chdir('temp');
            fs.writeFile('test.txt','The first line Async example',function(errw){
                fs.rename('test.txt','new.txt',function(errRename){
                  fs.stat('new.txt',function(errStat,stats){
                    echo('size: '+stats.size+' bytes');
                    fs.readFile('new.txt',function(errRF,data){
                      echo('File contents : \n'+data);
                    })
                  })
                })
            })
          }
        });
   });



})(require('fs'),require('process'),function(m){console.log(m)})
