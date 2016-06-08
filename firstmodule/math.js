module.exports.sum=function(){
   return [].slice.call(arguments).reduce(function(a,b){
        return a+b;
   },0)
};
