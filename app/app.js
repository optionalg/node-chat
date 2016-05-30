var express = require('express');
var app = express();

var config = require('config');
var serverConfig = config.get('server');
var serverPortConfig = parseInt(serverConfig.port);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/about', function (req, res) {
  res.send('About page');
});

app.listen(serverPortConfig, serverConfig.ip, function () {
  console.log('Chat app listening on port ' + serverPortConfig);
});
