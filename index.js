
const express = require("express");
const {connection_auth} = require("./src/api/excercise_plan/models/db_connection");
const router = require("./src/api/excercise_plan/routes/router");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

require("dotenv").config();
// const { establishConnection } = require("./excercise_plan/models/db_connection");

// Establishing database connection
connection_auth()


// const port = process.env.SERVER_PORT
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", router);
app.use(
    '/api-docs',
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDocument)
  );

app.listen(8000);