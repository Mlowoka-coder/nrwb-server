const {DataTypes,references} =require('sequelize');
const sequelize = require('../connection/connection');
const accountant = require('./accountant');
const nationalID = require('./nationalID');

const task = sequelize.define('task',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },
    type:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    authorisorID:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    witnessID:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    rate:{
        type:DataTypes.DOUBLE,
        allowNull:false,
    },
    status:{
        type:DataTypes.STRING,
        allowNull:false
    }
});

module.exports=task;