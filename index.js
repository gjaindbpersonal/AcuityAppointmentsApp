// Modules:
var express = require('express');
var Acuity = require('acuityscheduling');
var bodyParser = require('body-parser');

// App:
var app = express();
var acuity = Acuity.basic(require('./config'));

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/api/appointment', function (req, res) {
 acuity.request('appointments', function (err, res2, appointments) {
  if (err) return console.error(err);
  res.send(appointments);
 });
});


app.listen(3000, function () {
  console.log('Hello from 3000.');
});
