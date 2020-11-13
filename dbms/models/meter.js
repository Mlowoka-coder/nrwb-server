const {DataTypes,references} =require('sequelize');
const sequelize = require('../connection/connection');
const customer = require('./customer');

const meter = sequelize.define('meter',{
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
            model:customer,
            key:'id',
        },
    },
    balance:{
        type:DataTypes.DOUBLE,
        allowNull:false,
    },
    lastReading:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    status:{
        type:DataTypes.STRING,
        defaultValue:'Active'
    },
    area:{
        type:DataTypes.STRING,
        allowNull:false,
    },
});

module.exports=meter;