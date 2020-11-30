const {DataTypes,references} =require('sequelize');
const sequelize = require('../connection/connection');
const task = require('./task');

const taskReport = sequelize.define('taskReport',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },
    employeeID:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    taskID:{
        type:DataTypes.STRING,
        allowNull:false,
        references:{
            model:task,
            key:'id'
        }
    },
    status:{
        type:DataTypes.STRING,
        defaultValue:'Unverified'
    }
});

module.exports=taskReport;