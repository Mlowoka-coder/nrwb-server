const {DataTypes,references} =require('sequelize');
const sequelize = require('../connection/connection');
const nationalID = require('./nationalID');
const plumberTask = require('./task');

const faultReport = sequelize.define('faultReport',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },
    reporterID:{
        type:DataTypes.STRING,
        allowNull:false,
        references:{
            model:nationalID,
            key:'id',
        },
    },
    taskID:{
        type:DataTypes.STRING,
        allowNull:false,
        references:{
            model:plumberTask,
            key:'id'
        }
    },
    dueDate:{
        type:DataTypes.DATEONLY,
        allowNull:false,
    },
    type:{
        type:DataTypes.STRING,
        allowNull:false,
    },
});

module.exports=faultReport;