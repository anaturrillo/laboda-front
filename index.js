const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'jade');

app.use('/', routes());

app.use(express.static('public'));

app.listen(3000, function () {
  console.log('listening on port 3000')
});