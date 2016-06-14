(function(api,pv){
    pv.max=1000;
    pv.dbl=function(val,fn){
        var tm=Math.floor((Math.random()+1)*pv.max);
        setInterval(function () {
          if(val %2){

            fn.call(null,new Error("No Nine"),val*2);
          }
          else{
            fn.call(null,null,val*2);

          }

        }, tm);
    } ;
    pv.dblSync=function(val){
      if(val %2){
        throw(new Error("No Nine"));
      }
      else{
        return val*2;
      }
    }
    api.fardi=pv.dbl;
    api.fardiSync=pv.dblSync;
})(module.exports,{});
