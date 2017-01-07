var express = require('express');
var app = express();
var ip;
var ua;



app.get('/*', function(req, res) {
  
  
  res.locals.ua = req.get('User-Agent');
  
  ip = req.connection.remoteAddress;
  ua = req.get('User-Agent');
  
  res.send(ip + '\n' + ua);
});

app.listen(process.env.PORT, process.env.IP, function() {
  console.log("Request Header Parser listening on port " + process.env.PORT);
});