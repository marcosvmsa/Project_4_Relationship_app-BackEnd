const { Sequelize } = require('sequelize');

const OPTIONS = {
	dialect: 'postgres',
	username: 'postgres',
	password: 'example',
	port: 5432,
	database: 'postgres',
	host: '127.0.0.1',
};

const sequelize = new Sequelize('postgres', 'postgres', 'example', OPTIONS);

async function initializeDatabase() {
	try {
		await sequelize.authenticate();
		// await sequelize.sync();
		console.log('Connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
}

module.exports = {
	initializeDatabase,
	sequelize,
};
