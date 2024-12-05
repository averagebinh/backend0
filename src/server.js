const express = require('express');
const path = require('path');
require('dotenv').config();
console.log('check env, ', process.env);
const app = express(); // app express
const port = process.env.PORT || 8888; //port
const hostname = process.env.HOST_NAME;
//config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// khai báo route
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/abc', (req, res) => {
  res.send('Hello abc');
});

app.get('/hoidanit', (req, res) => {
  res.render('sample.ejs');
});
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
