var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
  res.writeHead(200, {'Content-Type':'application/json'});
  var json = {
    name:"papyrus",
    age:20
  }
  res.end(JSON.stringify(json));
}).listen(3000, '127.0.0.1');
