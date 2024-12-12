const connection = require('../config/database');
const {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require('../service/CRUDService');
const User = require('../model/user');

const getHomePage = async (req, res) => {
  let results = await User.find({});
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
  // let user = await getUserById(userId);
  let user = await User.findById(userId).exec();
  // console.log('>> check results', results);
  res.render('edit.ejs', { userEdit: user });
};

const postUpdateUser = async (req, res) => {
  console.log('req.body', req.body);

  // name property
  // let email = req.body.email;
  // let name = req.body.myName;
  // let city = req.body.city;
  // let userId = req.body.userId;
  const { email, myName: name, city, userId } = req.body;
  // await updateUserById(email, name, city, userId);
  // await User.updateOne(
  //   { name: name },
  //   { email: email },
  //   { city: city },
  //   { userId: userId }
  // );
  await User.updateOne(
    { _id: userId }, // Filter: Find the user by ID
    { $set: { email, name, city } } // Update: Set the fields to new values
  );

  console.log('email', email, 'name', name, 'city', city, 'id', userId);

  res.redirect('/');
};

const postDeleteUser = async (req, res) => {
  const userId = req.params.id;
  let user = await User.findById(userId).exec();
  res.render('delete.ejs', { userEdit: user });
};

const postHandleRemoveUser = async (req, res) => {
  const id = req.body.userId;
  // await deleteUserById(id);
  await User.deleteOne({ _id: id });
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
