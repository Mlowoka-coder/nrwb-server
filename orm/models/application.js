const {DataTypes,references} =require('sequelize');
const sequelize = require('../connection/connection');
const nationalID = require('./nationalID');
const bill = require('./bill');

const application = sequelize.define('application',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },
    natID:{
        type:DataTypes.STRING,
        allowNull:false,
        references:{
            model:nationalID,
            key:'id',
        }
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
        allowNull:false,
        references:{
            model:bill,
            key:'id'
        }
    },
    status:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:'Unapproved'
    }
});

module.exports=application;