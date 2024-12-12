const express = require('express');
const routerAPI = express.Router();
const { getUsersAPI } = require('../controller/apiController');
routerAPI.get('/', (req, res) => {
  res.send('Hello world with Api');
});

routerAPI.get('/abc', getUsersAPI);

routerAPI.get('/users', getUsersAPI);

routerAPI.get('/', (req, res) => {
  res.send('Hello world with Api');
});

module.exports = routerAPI;
