const { DataTypes } = require('sequelize');
const sequelize = require('../database/database'); // Assuming you've set up Sequelize and connected to the database

const Diamonds = sequelize.define('Diamonds', {
  itemNos: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'Item_nos', // Map to the actual column name in your database
  },
  sortingNos: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'Sorting_nos',
  },
  lab: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  colour: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  carat: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  clarity: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  shape: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cut: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fluorescence: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  measurement: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  polish: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  symmetry: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  auctionNos: {
    type: DataTypes.INTEGER,
    field: 'Auction_nos',
  },
  startPriceUSD: {
    type: DataTypes.FLOAT,
    field: 'Start_Price_in_US$',
  },
});
sequelize.sync();
module.exports = Diamonds;
