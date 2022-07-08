const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../connection')

const User = sequelize.define('User', {  
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false 
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false 
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false 
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false 
  },
  lastName: {
    type: DataTypes.STRING
  },
  avatarImg: {
    type: DataTypes.STRING
  },
  avatarImg: {
    type: DataTypes.STRING
  },
  userType: {
    type: DataTypes.STRING
  },
  accountStatus: {
    type: DataTypes.STRING
  },
  gender: {
    type: DataTypes.STRING
  },
  occupation: {
    type: DataTypes.STRING
  },
  about: {
    type: DataTypes.STRING
  },
  locationID: {
    type: DataTypes.STRING
  },
  timestamps: {timestamps: true},
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true