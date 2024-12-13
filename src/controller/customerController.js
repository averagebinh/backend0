// {key: value}
const { uploadSingleFile } = require('../service/fileService');
const { createCustomerService } = require('../service/customerService');

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
};
