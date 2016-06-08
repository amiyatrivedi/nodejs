// run by cmd # sudo PORT=8080 HOST=localhost node run-server.js
(function(http,ps,fs,soi,echo){
  //  var opts={host:'www.bing.com',port:80,path:'/',method:'GET'}
  var messages=[];
  var handler=function(req,res){
    fs.readFile(__dirname+'/websocket-client.html',function(e,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(data);
    })
     res.writeHead(200,{'Content-Type':'text/html'});

  }
  var app=http.createServer(handler)
   var io=soi.listen(app);

  io.sockets.on('connection',function(socket){
     setInterval(function(){
        socket.emit('timer',messages.map(function(item){
             return '<div ><span ><b>'+item.who+'</b></span> <p>'+item.what+'</p> <span style="color:gray;font-size:7px;">'+item.when+'</span></div><hr />'
        }).join(''));
     },399);
     socket.on('submit',function(data){
          messages.push(data);
        //  echo('submitted : '+data.when+','+data.who);
     });
  });

  app.listen(ps.env.PORT,ps.env.IP);
  echo('server running!..');
  //echo('check : http://'+ps.env.IP+":"+ps.env.PORT+"/");
})(require('http'),require('process'),require('fs'),require('socket.io'),function(m){console.log(m)})
