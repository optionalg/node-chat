var express = require('express');
var app = express();

const PORT = 80;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/about', function (req, res) {
  res.send('About page');
});

app.listen(PORT, function () {
  console.log('Example app listening on port ' + PORT);
});
