(function(ps,api,echo){
    ps.stdin.resume();
    ps.stdin.setEncoding('utf8');
    ps.stdin.on('data',function(part){
      ps.stdout.write('size: '+part.length+"\n")
    });
    ps.stdin.on('end',function(){
      ps.stderr.write('End!\n');
    });

    ps.on('SIGTERM',function(){
       //invoked when  running this cmd : kill -TERM <PID-of-Node>
      echo("Did you want to finish me ?\n");
    })
    echo("Ps ID: "+ps.pid);

})(require('process'),{},function(m){console.log(m)})
