var express = require('express');
var app = express();

var config = require('config');
var serverConfig = config.get('server');
var serverPortConfig = parseInt(serverConfig.port);

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index', { title : 'Home' });
});

app.get('/about', function (req, res) {
  res.send('About page');
});

app.listen(serverPortConfig, serverConfig.ip, function () {
  console.log('Chat app listening on port ' + serverPortConfig);
});
