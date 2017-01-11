var express = require('express');
var app = express();
var useragent = require('useragent');
var parser = require('accept-language-parser');
var ip;
var operatingSystem;
var language;
var whoAmIJSON;

app.get('/', function(req, res) {
  ip = req.connection.remoteAddress;
  operatingSystem = useragent.parse(req.headers['user-agent']);
  language = parser.parse(req.headers["accept-language"]);
  language = language[0].code + '-' + language[0].region;  
  whoAmIJSON = JSON.stringify({
    "ipaddress": ip,
    "language": language,
    "software": operatingSystem.os.family
  });
  res.send(whoAmIJSON);
});

app.listen(process.env.PORT, process.env.IP, function() {
  console.log("Request Header Parser listening on port " + process.env.PORT);
});
