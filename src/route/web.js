const express = require('express');
const router = express.Router();
const {
  getHomePage,
  getABC,
  getHoiDanIt,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
} = require('../controller/homeController');
router.get(
  '/',
  // xu ly data => controller
  getHomePage
);

router.get('/abc', getABC);

router.get('/hoidanit', getHoiDanIt);

router.get('/create', getCreatePage);
router.get('/update/:id', getUpdatePage);

router.post('/create-user', postCreateUser);
router.post('/update-user', postUpdateUser);

module.exports = router;
