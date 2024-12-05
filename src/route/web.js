const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World new start!');
});

router.get('/abc', (req, res) => {
  res.send('Hello World abc!');
});

router.get('/hoidanit', (req, res) => {
  // res.send('<h1>hoidanit</h1>');
  res.render('sample.ejs');
});

module.exports = router;
