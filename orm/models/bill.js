const {DataTypes,references} =require('sequelize');
const sequelize = require('../connection/connection');
const nationalID = require('./nationalID');
const tariff = require('./tariff');

const application = sequelize.define('application',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },
    payer:{
        type:DataTypes.STRING,
        allowNull:false,
        references:{
            model:nationalID,
            key:'id',
        },
        defaultValue:'null'
    },
    amount:{
        type:DataTypes.DOUBLE,
        allowNull:false,
    },
    balance:{
        type:DataTypes.DOUBLE,
        allowNull:false,
    },
    purpose:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    status:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:'Unapproved',
    },
    tariff:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:tariff,
            key:'id'
        }
    }
});

module.exports = application;