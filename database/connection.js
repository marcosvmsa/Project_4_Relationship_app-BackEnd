const { Sequelize } = require('sequelize');


// Option 1: Passing a connection URI
console.log(process.env.DB_CONNECTION_STRING)
console.log('AUI')
const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING)
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

