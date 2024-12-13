const Customer = require('../model/customer.js');

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

const getAllCustomerService = async (req, res) => {
  try {
    let result = await Customer.find({});
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
module.exports = {
  createCustomerService,
  createArrayCustomerService,
  getAllCustomerService,
  updateCustomerService,
  deleteACustomerService,
};
