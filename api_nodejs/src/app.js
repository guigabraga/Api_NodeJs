const express = require('express');
const router = require('./router');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use('/css', express.static(__dirname + '../public/css'))
app.use('/img', express.static(__dirname + '../public/img'))

app.use(router);

module.exports = app;