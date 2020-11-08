const {DataTypes,references} =require('sequelize');
const sequelize = require('../connection/connection');
const nationalID = require('./nationalID');
const task = require('./task');

const reminder = sequelize.define('reminder',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },
    taskID:{
        type:DataTypes.STRING,
        allowNull:false,
        references:{
            model:task,
            key:'id',
        },
    },
    supervisorID:{
        type:DataTypes.STRING,
        allowNull:false,
        references:{
            model:nationalID,
            key:'id',
        },
    },
});

module.exports=reminder;