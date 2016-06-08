
(function(math,time,echo){
    echo(math.sum(1,3,4));
    echo('---time-')
    for(var p in time){
      if(typeof time[p] === 'function'){
          echo(p);
      }
    }
    echo(time())._d;

})(require('./math'),require('moment'),function(m){console.log(m)});
