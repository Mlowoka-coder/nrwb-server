const {DataTypes,references} =require('sequelize');
const sequelize = require('../connection/connection');
const nationalID = require('./nationalID');

const payment = sequelize.define('payment',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },
    owner:{
        type:DataTypes.STRING,
        allowNull:false,
        references:{
            model:nationalID,
            key:'id',
        },
    },
    amount:{
        type:DataTypes.DOUBLE,
        allowNull:false,
    },
    balance:{
        type:DataTypes.DOUBLE,
        allowNull:false,
    },
    service:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    status:{
        type:DataTypes.STRING,
        defaultValue:'Uncalculated'
    },
});

module.exports=payment;