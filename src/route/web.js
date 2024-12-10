const express = require('express');
const router = express.Router();
const {
  getHomePage,
  getABC,
  getHoiDanIt,
  postCreateUser,
  getCreatePage,
} = require('../controller/homeController');
router.get(
  '/',
  // xu ly data => controller
  getHomePage
);

router.get('/abc', getABC);

router.get('/hoidanit', getHoiDanIt);

router.get('/create', getCreatePage);

router.post('/create-user', postCreateUser);

module.exports = router;
