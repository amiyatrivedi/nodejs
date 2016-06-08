(function(ps,api,echo){
      echo("is writable? "+ps.stdout.writable);
      ps.stdout.write("Salem ");
      ps.stdout.write("Alem");
      ps.stdout.write("\n");
})(require('process'),{},function(m){console.log(m)})
