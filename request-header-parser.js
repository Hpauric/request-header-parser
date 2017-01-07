var express = require('express');
var app = express();
var url = require('url');


app.get('/*', function(req, res) {
  url = url.parse(req.url, true);
  
  res.send(req);
});

app.listen(process.env.PORT, process.env.IP, function() {
  console.log("Request Header Parser listening on port " + process.env.PORT);
});