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
  let email = req.body.email;
  let name = req.body.myName;
  let city = req.body.city;
  console.log('email', email, 'name', name, 'city', city);
  connection.query(
    `INSERT INTO 
    Users (email,name, city) 
    VALUES (?, ? ,? )`,
    [email, name, city],
    function (err, results) {
      console.log(results);
      res.send('create user succeed!');
    }
  );
};
module.exports = {
  getHomePage,
  getABC,
  getHoiDanIt,
  postCreateUser,
};
