const {DataTypes,references} =require('sequelize');
const sequelize = require('../connection/connection');
const nationalID = require('./nationalID');
const meter = require('./meter');

const reading = sequelize.define('reading',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },
    salesRepresentativeID:{
        type:DataTypes.STRING,
        allowNull:false,
        references:{
            model:nationalID,
            key:'id',
        },
    },
    meterID:{
        type:DataTypes.STRING,
        allowNull:false,
        references:{
            model:meter,
            key:'id',
        },
    },
    lastReading:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    newReading:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    status:{
        type:DataTypes.STRING,
        allowNull:'Uncalculated'
    },
});

module.exports=reading;