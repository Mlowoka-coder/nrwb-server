const {DataTypes,references} =require('sequelize');
const sequelize = require('../connection/connection');
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
        references:{
            model:nationalID,
            key:'id',
        },
    },
    witnessID:{
        type:DataTypes.STRING,
        allowNull:false,
        references:{
            model:nationalID,
            key:'id'
        }
    },
    rate:{
        type:DataTypes.DOUBLE,
        allowNull:false,
    },
});

module.exports=task;