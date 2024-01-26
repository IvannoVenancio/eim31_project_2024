'use strict';
const {
  Model, DataTypes
} = require('sequelize');

  class cliente extends Model {
   static init(sequelize){
    super.init({
        nome: DataTypes.STRING,
        idade: DataTypes.INTEGER
      }, {
        sequelize,
        modelName: 'cliente',
      });
   }
   static associate(models) {
    // define association here
  }
  }

  module.exports = cliente;
