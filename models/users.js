const {DataTypes} = require('sequelize');

const sequelize = require('../connections/database');
const Users  = sequelize.define('users' ,{
    id:{
         type : DataTypes.INTEGER,
         autoIncrement : true,
         allowNull : false,
         primaryKey : true,
         unique : true,
    },
    name : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    email : {
        type : DataTypes.STRING,
        allowNull : false,
        unique : true,
    },
    password : {
        type : DataTypes.STRING,
        allowNull : false,
    }
})
module.exports = Users;

