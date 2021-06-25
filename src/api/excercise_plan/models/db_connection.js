const Sequelize = require('sequelize');
require("dotenv").config();


// Database credentials
// const dataBase = process.env.DATABASE_NAME;
// const userName = process.env.USER_NAME;
// const password = process.env.PASSWORD;
// const port = process.env.DB_PORT;
// const host = process.env.DB_HOST;


const dataBase = 'daja7296edutaj';
const userName = 'dcniugjlwfymhz';
const password = '07419ab4034201c064f5443a3be93e9cbfbfde40312eabc836b15edca814873c';
const port = 5432;
const host = 'ec2-52-4-111-46.compute-1.amazonaws.com';


// Established database connection
const db_connection = new Sequelize(
  dataBase, userName, password, {
    port: port,
    host: host,
    dialect: 'postgres',
    dialectOptions: {
      ssl:{
        require: true,
        rejectUnauthorized: false}
      }
});


  const connection_auth = async () => {
    try {
      await db_connection.authenticate();
  
      console.log("Connection has been established successfully.");
    } catch (e) {
      console.error("Unable to connect to the database:");
    }
  };

  module.exports = {
    db_connection,
    connection_auth
  }

  // db_connection
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });