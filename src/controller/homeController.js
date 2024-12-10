const connection = require('../config/database');
const { getAllUsers } = require('../service/CRUBService');

const getHomePage = async (req, res) => {
  let results = await getAllUsers();
  return res.render('home.ejs', { listUsers: results });
};

const getABC = (req, res) => {
  res.send('Hello World abc!');
};

const getHoiDanIt = (req, res) => {
  res.render('sample.ejs');
};

const postCreateUser = async (req, res) => {
  console.log('req.body', req.body);
  let email = req.body.email;
  let name = req.body.myName;
  let city = req.body.city;
  console.log('email', email, 'name', name, 'city', city);

  let [results, fields] = await connection.query(
    `INSERT INTO
    Users (email,name, city)
    VALUES (?, ? ,? )`,
    [email, name, city]
  );
  console.log('check results test: ', results);
  res.send('create user succeed test!');
};

const getCreatePage = (req, res) => {
  res.render('create.ejs');
};

module.exports = {
  getHomePage,
  getABC,
  getHoiDanIt,
  postCreateUser,
  getCreatePage,
};
