'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EXCERCISES extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  EXCERCISES.init({
    excercie: DataTypes.STRING,
    calories_burned: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'EXCERCISES',
  });
  return EXCERCISES;
};