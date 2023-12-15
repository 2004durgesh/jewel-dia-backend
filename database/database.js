const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: '127.0.0.1',
  username: "root",
  password: '',
  database: 'esamyak',
  dialectModule: require('mysql2'), // Use mysql2 as the underlying library
});

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to the MySQL database!');
  })
  .catch((err) => {
    console.error('Error connecting to MySQL:', err);
  });

module.exports = sequelize;
