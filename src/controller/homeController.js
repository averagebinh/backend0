const connection = require('../config/database');

const getHomePage = (req, res) => {
  return res.render('home.ejs');
};

const getABC = (req, res) => {
  res.send('Hello World abc!');
};

const getHoiDanIt = (req, res) => {
  res.render('sample.ejs');
};

module.exports = {
  getHomePage,
  getABC,
  getHoiDanIt,
};
