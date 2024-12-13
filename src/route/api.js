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

module.exports = routerAPI;
