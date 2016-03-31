var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine','ejs');

var htmlData = {
  nendoroid:['33','42','75','97','109','129','150','172','194','207','212',
  '239','251','261','274','280','299','300','303','326','333','339a','339b',
  '380','381a','381b','414','448','480','493','499','500','517','539','549','570']
}

app.get('/',function(req, res){
  res.render('index',htmlData);
});

app.listen(port);
