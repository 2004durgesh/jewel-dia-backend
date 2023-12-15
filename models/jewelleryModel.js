const { DataTypes } = require('sequelize');
const sequelize = require('../database/database'); // Assuming you've set up Sequelize and connected to the database

const Jewellery = sequelize.define('Jewellery', {
  itemNos: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'Item_nos', // Map to the actual column name in your database
  },
  jewellryType: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'Jewellry_Type',
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  size: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  detail: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  particulars: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  metal: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  grossWt: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  price: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  remark: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});
sequelize.sync();
module.exports = Jewellery;
