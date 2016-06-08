(function(fs,ps,echo){
   if(fs.existsSync('temp')){
     echo('directory exists');
     if(fs.existsSync('temp/new.txt')){
       fs.unlinkSync('temp/new.txt')
     }
     fs.rmdirSync('temp');
   }

   fs.mkdirSync('temp');
   if(fs.existsSync('temp')){
         ps.chdir('temp');
         fs.writeFileSync('tst.txt','First line in tst test file')
          fs.renameSync('tst.txt','new.txt');
          echo(fs.statSync('new.txt').size+' bytes');
          echo('new.txt contents : \n');
          echo(fs.readFileSync('new.txt').toString());
   }


})(require('fs'),require('process'),function(m){console.log(m)})
