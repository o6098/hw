var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get('/',function(req,res){
  res.send('<html><head></head><body><h1>Welcome to Undertale!!!</h1></body></html>');
});

app.get('/Undertale', function(req,res){
  res.json({
    tall:"papyrus",
    short:"sans"
  });
});

app.listen(port);
