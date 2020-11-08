const {DataTypes,references} =require('sequelize');
const sequelize = require('../connection/connection');
const nationalID = require('./nationalID');
const application = require('./application');

const quotation = sequelize.define('quotation',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },
    authorisorID:{
        type:DataTypes.STRING,
        allowNull:false,
        references:{
            model:nationalID,
            key:'id',
        },
    },
    applicationID:{
        type:DataTypes.STRING,
        allowNull:false,
        references:{
            model:application,
            key:'id',
        },
    },
});

module.exports=quotation;