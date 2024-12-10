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

const postCreateUser = (req, res) => {
  console.log('req.body', req.body);
  res.send('create a new user');
};
module.exports = {
  getHomePage,
  getABC,
  getHoiDanIt,
  postCreateUser,
};
