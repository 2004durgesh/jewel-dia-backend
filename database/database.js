const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
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
