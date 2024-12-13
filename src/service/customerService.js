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

module.exports = {
  createCustomerService,
  createArrayCustomerService,
};
