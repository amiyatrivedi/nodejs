(function(Bf,echo){
   var b=new Bf('Salem');
   echo(b.toString());
   echo(b.toString('base64'));
   var v=new Bf('Alem').toString('base64');
   echo(b.toString('utf-8',0,2));
})(Buffer,function(m){console.log(m)})
