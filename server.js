const express = require('express');
const app = express(); // app express
const port = 8081; //port

// khai báo route
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/abc', (req, res) => {
  res.send('Hello abc');
});

app.get('/hoidanit', (req, res) => {
  res.send('<h1>Hello hoidanit</h1>');
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
