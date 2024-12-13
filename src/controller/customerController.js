// {key: value}
const { uploadSingleFile } = require('../service/fileService');

const {
  createCustomerService,
  createArrayCustomerService,
  getAllCustomerService,
  updateCustomerService,
  deleteACustomerService,
} = require('../service/customerService');

module.exports = {
  postCreateCustomer: async (req, res) => {
    let { name, address, phone, email, description } = req.body;

    let imageUrl = '';
    console.log(name, description);

    if (!req.files || Object.keys(req.files).length === 0) {
      //do nothing
    } else {
      let result = await uploadSingleFile(req.files.image);
      imageUrl = result.path;
    }

    let customerData = {
      name,
      address,
      phone,
      email,
      description,
      image: imageUrl,
    };
    let customer = await createCustomerService(customerData);

    return res.status(200).json({
      EC: 0,
      data: customer,
    });
  },

  postCreateArrayCustomer: async (req, res) => {
    // console.log(req.body.customers);
    let customers = await createArrayCustomerService(req.body.customers);
    if (customers) {
      return res.status(200).json({
        EC: 0,
        data: customers,
      });
    } else {
      return res.status(200).json({
        EC: -1,
        data: customers,
      });
    }
  },

  getAllCustomer: async (req, res) => {
    let results = await getAllCustomerService();

    return res.status(200).json({
      EC: 0,
      data: results,
    });
  },

  putUpdateCustomers: async (req, res) => {
    console.log('check req.body >>>', req.body);
    let { name, email, address, userId } = req.body;
    let user = await updateCustomerService(userId, name, email, address);

    return res.status(200).json({
      EC: 0,
      data: user,
    });
  },

  deleteACustomer: async (req, res) => {
    let id = req.body.id;
    let results = await deleteACustomerService(id);
    return res.status(200).json({
      EC: 0,
      data: results,
    });
  },
};
