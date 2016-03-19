var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/html'});
  var html = fs.readFileSync(__dirname + '/index.htm','utf8');
  var mg = 'Helloooooo!!';
  html = html.replace('{mg}',mg);
  res.end(html);
}).listen(3000, '127.0.0.1');
