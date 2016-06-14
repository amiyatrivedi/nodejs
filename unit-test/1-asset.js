(function(rq,m){
  (function(assert,fun){
     assert.equal(fun.fardiSync(2),4);
     assert.throws(function(){
       fun.fardiSync(3);
     },'/N/')
     fun.fardi(2,function(err,result){
       assert.ifError(err);
       assert.equal(result,4,"Should be printed if test failed")
     });
     fun.fardi(3,function(err,res){
       assert.notEqual(err,null);
     })

  })(rq(m.a),rq(m.fun));
})(require,{a:"assert",fun:"./mmfun"})
