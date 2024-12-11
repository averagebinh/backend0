const express = require('express');
require('dotenv').config();
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./route/web');
const connection = require('./config/database');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config req.body
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data

//view engine
configViewEngine(app);

//route
app.use('/', webRoutes);

const kittySchema = new mongoose.Schema({
  name: String,
});

const Kitten = mongoose.model('Kitten', kittySchema);
const cat = new Kitten({ name: 'Binh cat' });
cat.save();

(async () => {
  try {
    // test connection
    await connection();
    app.listen(port, hostname, () => {
      console.log(`Backend zero app listening on port ${port}`);
    });
  } catch (error) {
    console.log('>>> Error connect to DB, ', error);
  }
})();
