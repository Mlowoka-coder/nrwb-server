const {DataTypes,references} =require('sequelize');
const sequelize = require('../connection/connection');
const plumber = require('./plumber');
const task = require('./task');

const taskReport = sequelize.define('taskReport',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },
    plumberID:{
        type:DataTypes.STRING,
        allowNull:false,
        references:{
            model:plumber,
            key:'employeeID',
        },
    },
    taskID:{
        type:DataTypes.STRING,
        allowNull:false,
        references:{
            model:task,
            key:'id'
        }
    },
});

module.exports=taskReport;