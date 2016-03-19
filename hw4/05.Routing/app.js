var http = require ('http');
var fs = require('fs');

http.createServer(function(req,res){
  if(req.url === '/'){
    res.writeHead(200,{'Content-Type':'text/html'});
    fs.createReadStream(__dirname + '/index.htm').pipe(res);
  }
  else if(req.url ==='/undertale'){
    res.writeHead(200,{'Content-Type':'application/json'});
    var obj = {
      tall:'papyrus',
      short:'sans'
    }
    res.end(JSON.stringify(obj));
  }
  else {
    res.writeHead(404);
    res.end('error');
  }
}).listen(3000,'127.0.0.1');
