const {DataTypes,references} =require('sequelize');
const sequelize = require('../connection/connection');
const user = require('./nationalID');

const customer = sequelize.define('customer',{
    customerID:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },
    userID:{
        type:DataTypes.STRING,
        allowNull:false,
        references:{
            model:user,
            key:'id',
        }
    },
    status:{
        type:DataTypes.STRING,
        defaultValue:'active'
    },
    balance:{
        type:DataTypes.DOUBLE,
        allowNull:false
    }
});

module.exports=customer;