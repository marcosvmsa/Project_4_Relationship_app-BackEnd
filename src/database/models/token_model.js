const { DataTypes } = require('sequelize');
const { sequelize } = require('../connection');

const Token = sequelize.define('Token', {
	id: {
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		primaryKey: true,
	},
	TokenName: {
		type: DataTypes.STRING,
		// allowNull: false,
	},
	email: {
		type: DataTypes.STRING,
		// allowNull: false,
	},
	firstName: {
		type: DataTypes.STRING,
		// allowNull: false,
	},
	lastName: {
		type: DataTypes.STRING,
	},
	password: {
		type: DataTypes.STRING,
	},
	avatar: {
		type: DataTypes.STRING,
	},
	TokenType: {
		type: DataTypes.STRING,
	},
	accountStatus: {
		type: DataTypes.STRING,
	},
	gender: {
		type: DataTypes.STRING,
	},
	occupation: {
		type: DataTypes.STRING,
	},
	about: {
		type: DataTypes.STRING,
	},
	locationID: {
		type: DataTypes.STRING,
	},
});

module.exports = { Token };
