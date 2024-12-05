const express = require('express');
const path = require('path');
require('dotenv').config();

const configViewEngine = require('./config/viewEngine');

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

configViewEngine(app);

app.get('/', (req, res) => {
  res.send('Hello World new start!');
});

app.get('/abc', (req, res) => {
  res.send('Hello World abc!');
});

app.get('/hoidanit', (req, res) => {
  // res.send('<h1>hoidanit</h1>');
  res.render('sample.ejs');
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
