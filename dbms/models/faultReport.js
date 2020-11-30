const {DataTypes,references} =require('sequelize');
const sequelize = require('../connection/connection');
const customer = require('./customer');
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
            model:customer,
            key:'customerID',
        },
    },
    type:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    time:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    contact:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    reminder:{
        type:DataTypes.STRING,
        allowNull:false,
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