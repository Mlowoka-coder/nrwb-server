const {DataTypes,references} =require('sequelize');
const sequelize = require('../connection/connection');
const customer = require('./customer');

const meter = sequelize.define('meter',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
    },
    owner:{
        type:DataTypes.STRING,
        references:{
            model:customer,
            key:'id',
        },
        defaultValue:null
    },
    balance:{
        type:DataTypes.DOUBLE,
        defaultValue:0.0
    },
    lastReading:{
        type:DataTypes.STRING,
        defaultValue:null
    },
    class:{
        type:DataTypes.STRING,
        defaultValue:null
    },
    lastReadMonth:{
        type:DataTypes.STRING,
        defaultValue:null
    },
    status:{
        type:DataTypes.STRING,
        defaultValue:'Active'
    },
    zone:{
        type:DataTypes.STRING,
        defaultValue:null
    },
});

module.exports=meter;