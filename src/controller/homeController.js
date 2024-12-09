const connection = require('../config/database');

const getHomePage = (req, res) => {
  //process data
  //call model
  let users = [];
  connection.query('SELECT * FROM Users', function (err, results, fields) {
    users = results;
    console.log('>>>result1: ', results); // rows returned by server
    console.log('>>> check users ', users);
    res.send(JSON.stringify(users));
  });
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
