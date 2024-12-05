const express = require('express');
const router = express.Router();
const {
  getHomePage,
  getABC,
  getHoiDanIt,
} = require('../controller/homeController');
router.get(
  '/',
  // xu ly data => controller
  getHomePage
);

router.get('/abc', getABC);

router.get('/hoidanit', getHoiDanIt);

module.exports = router;
