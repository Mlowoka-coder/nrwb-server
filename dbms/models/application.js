const {DataTypes,references} =require('sequelize');
const sequelize = require('../connection/connection');
const user = require('./user');
const bill = require('./bill');

const application = sequelize.define('application',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },
    accID:{
        type:DataTypes.STRING,
        allowNull:false,
        references:{
            model:user,
            key:'accID',
        }
    },
    zone:{
        type:DataTypes.STRING,
        allowNull:false
    },
    longtude:{
        type:DataTypes.DOUBLE,
        allowNull:false,
    },
    latitude:{
        type:DataTypes.DOUBLE,
        allowNull:false,
    },
    purpose:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    billID:{
        type:DataTypes.STRING,
        defaultValue:null,
        references:{
            model:bill,
            key:'id'
        }
    },
    type:{
        type:DataTypes.STRING,
        defaultValue:'New Connection'
    },
    status:{
        type:DataTypes.STRING,
        defaultValue:'Measure'
    }
},
{
    tableName:'application'
});

module.exports = application;