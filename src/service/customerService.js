const Customer = require('../model/customer.js');
const aqp = require('api-query-params');

const createCustomerService = async (customerData) => {
  console.log('>>>check customerData', customerData);
  try {
    let results = await Customer.create({
      name: customerData.name,
      address: customerData.address,
      phone: customerData.phone,
      email: customerData.email,
      description: customerData.description,
      image: customerData.image,
    });
    return results;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const createArrayCustomerService = async (arr) => {
  try {
    let result = await Customer.insertMany(arr);
    return result;
  } catch (error) {
    console.log('>>> error: ', error);
    return null;
  }
};

const getAllCustomerService = async (limit, page, name, queryString) => {
  try {
    let result = null;
    if (limit && page) {
      let offset = (page - 1) * limit;

      const { filter } = aqp(queryString);
      console.log('>>>check filter, ', filter);

      delete filter.page;

      result = await Customer.find(filter).skip(offset).limit(limit).exec();
    } else {
      result = await Customer.find({});
    }
    return result;
  } catch (error) {
    console.log('>>> error: ', error);
    return null;
  }
};

const updateCustomerService = async (userId, name, email, address) => {
  try {
    let result = await Customer.updateOne(
      { _id: userId },
      { name, email, address }
    );
    return result;
  } catch (error) {
    console.log('>>> error: ', error);
    return null;
  }
};

const deleteACustomerService = async (id) => {
  try {
    let result = await Customer.deleteById(id);
    return result;
  } catch (error) {
    console.log('>>> error: ', error);
    return null;
  }
};

const deleteArrayCustomerService = async (ids) => {
  try {
    let result = await Customer.delete({ _id: { $in: ids } });
    return result;
  } catch (error) {
    console.log('>>> error: ', error);
    return null;
  }
};
module.exports = {
  createCustomerService,
  createArrayCustomerService,
  getAllCustomerService,
  updateCustomerService,
  deleteACustomerService,
  deleteArrayCustomerService,
};
