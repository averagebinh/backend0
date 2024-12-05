//api ssr
const express = require('express');
const router = express.Router();

// khai báo route
router.get('/', (req, res) => {
  res.send('Hello World!');
});
router.get('/abc', (req, res) => {
  res.send('Hello abc nodemon');
});
router.get('/hoidanit', (req, res) => {
  res.render('sample.ejs');
});

module.exports = router;
