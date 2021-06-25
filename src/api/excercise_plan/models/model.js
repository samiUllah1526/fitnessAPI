const Sequelize = require('sequelize');
const {db_connection} = require("./db_connection");


const excercise_table = db_connection.define('excercise_chart', {
    excercise_id: {type: Sequelize.INTEGER, allowNull: false,autoIncrement: true,primaryKey: true},
    excercise_name: {type: Sequelize.TEXT, allowNull: false,},
    calories_burn: {type: Sequelize.INTEGER, allowNull: false,}
  },
  {
    createdAt: false,
    updatedAt: false,
    // instanceMethods: {
    //   async generateHashedPassword() {
    //     let salt = await bcrypt.genSalt(10);
    //     this.password = await bcrypt.hash(this.Password, salt);
    //   },
    // },
  }
  )




// // force: false create table if already doesnot exist
  db_connection
  .sync({ logging: console.log, force: false })
  .then(() => {
    console.log("table created");
  })
  .catch(() => {
    console.log("error occured during creatation of table");
  });

module.exports = excercise_table;

