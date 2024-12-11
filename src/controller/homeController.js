const connection = require('../config/database');
const {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require('../service/CRUDService');
const User = require('../model/user');

const getHomePage = async (req, res) => {
  let results = [];
  return res.render('home.ejs', { listUsers: results });
};

const getABC = (req, res) => {
  res.send('Hello World abc!');
};

const getHoiDanIt = (req, res) => {
  res.render('sample.ejs');
};

const postCreateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.myName;
  let city = req.body.city;
  // call model

  await User.create({
    email,
    name,
    city,
  });

  res.send('create user succeed test!');
};

const getCreatePage = (req, res) => {
  res.render('create.ejs');
};

const getUpdatePage = async (req, res) => {
  const userId = req.params.id;
  let user = await getUserById(userId);
  // console.log('>> check results', results);
  res.render('edit.ejs', { userEdit: user });
};

const postUpdateUser = async (req, res) => {
  console.log('req.body', req.body);

  // name property
  let email = req.body.email;
  let name = req.body.myName;
  let city = req.body.city;
  let userId = req.body.userId;
  await updateUserById(email, name, city, userId);
  console.log('email', email, 'name', name, 'city', city, 'id', userId);

  res.redirect('/');
};

const postDeleteUser = async (req, res) => {
  const userId = req.params.id;
  let user = await getUserById(userId);
  res.render('delete.ejs', { userEdit: user });
};

const postHandleRemoveUser = async (req, res) => {
  const id = req.body.userId;
  await deleteUserById(id);
  res.redirect('/');
};

module.exports = {
  getHomePage,
  getABC,
  getHoiDanIt,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  postHandleRemoveUser,
};
