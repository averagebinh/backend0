const express = require('express');

const routerAPI = express.Router();

const {
  getUsersAPI,
  postCreateUserAPI,
  putUpdateUserAPI,
  deleteUserAPI,
  postUploadSingleFileAPI,
  postUploadMultipleFilesAPI,
} = require('../controller/apiController');

const {
  postCreateCustomer,
  postCreateArrayCustomer,
  getAllCustomer,
  putUpdateCustomers,
  deleteACustomer,
  deleteArrayCustomer,
} = require('../controller/customerController');

const {
  postCreateProject,
  getAllProject,
  deleteAProject,
  updateAProject,
} = require('../controller/projectController');
routerAPI.get('/users', getUsersAPI);

routerAPI.post('/users', postCreateUserAPI);

routerAPI.put('/users', putUpdateUserAPI);

routerAPI.delete('/users', deleteUserAPI);

routerAPI.post('/file', postUploadSingleFileAPI);

routerAPI.post('/files', postUploadMultipleFilesAPI);

routerAPI.post('/customers', postCreateCustomer);

routerAPI.post('/customers-many', postCreateArrayCustomer);

routerAPI.get('/customers', getAllCustomer);

routerAPI.put('/customers', putUpdateCustomers);

routerAPI.delete('/customers', deleteACustomer);

routerAPI.delete('/customers-many', deleteArrayCustomer);

routerAPI.post('/projects', postCreateProject);

routerAPI.get('/projects', getAllProject);

routerAPI.delete('/projects/', deleteAProject);

routerAPI.put('/projects/', updateAProject);

routerAPI.get('/binhquery', (req, res) => {
  console.log('>>check req.query', req.query);
  res.status(200).json({
    data: req.query,
  });
});

routerAPI.get('/info/:name/:city', (req, res) => {
  console.log('>>check req.params', req.params);

  res.status(200).json({
    data: req.params,
  });
});

module.exports = routerAPI;
