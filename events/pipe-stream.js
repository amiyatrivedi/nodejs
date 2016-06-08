(function(ps,req,fs,zlib,api,echo){
    var s=req('https://fss.abdennoor.com');
    s.pipe(ps.stdout);//write on console
    s.pipe(fs.createWriteStream('fss.html')); // write on file
    s.pipe(zlib.createGzip()).pipe(fs.createWriteStream('fss.html.gz')) // compress
})(require('process'),require('request'),require('fs'),require('zlib'),{},function(m){console.log(m)})
