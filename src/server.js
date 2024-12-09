const express = require('express');
require('dotenv').config();
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./route/web');
// Get the client
const mysql = require('mysql2');

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//view engine
configViewEngine(app);

//route
app.use('/', webRoutes);

//test connection
// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3307,
  user: 'root',
  password: '123456',
  database: 'hoidanit',
});

// A simple SELECT query
connection.query('SELECT * FROM Users', (err, results, fields) => {
  if (err) {
    console.log('Error executing query:', err);
  } else {
    console.log('>>>result: ', results); // rows returned by server
    console.log('>>>fields: ', fields); // extra metadata about results
  }
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
