(function(os,echo){
    for(var p in os){
      if(typeof os[p] ==='function'){
        echo(p+':'+os[p]());
      }
    }
})(require('os'),function(m){console.log(m)})
