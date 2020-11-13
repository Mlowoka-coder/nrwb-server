const {DataTypes,references} =require('sequelize');
const sequelize = require('../connection/connection');
const plumber = require('./plumber');
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
            model:plumber,
            key:'employeeID',
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
    status:{
        type:DataTypes.STRING,
        defaultValue:'Unconfirmed'
    }
});

module.exports=faultReport;