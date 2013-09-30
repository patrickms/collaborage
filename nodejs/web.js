

var express = require('express');

var app = express();
var server = require('http').createServer(app)

server.listen(process.env.PORT || 5000);

app.get('/*', function(req, res, next) {
  res.redirect("http://www.reuters.com/article/2012/11/27/us-valley-ageism-idUSBRE8AQ0JK20121127");
});