const { Sequelize } = require('sequelize');

const OPTIONS = {
    dialect: 'postgres',
    username: 'marcos',
    password: 's3nh@',
    port: 5432,
    database: 'dev'
}

const sequelize = new Sequelize(OPTIONS)

async function initializeDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

module.exports = {
  initializeDatabase
}

