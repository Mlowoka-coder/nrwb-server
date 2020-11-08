const {DataTypes,references} =require('sequelize');
const sequelize = require('../connection/connection');
const nationalID = require('./nationalID');
const application = require('./application');

const measurement = sequelize.define('measurement',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },
    applicationID:{
        type:DataTypes.STRING,
        allowNull:false,
        references:{
            model:application,
            key:'id',
        },
    },
    distance:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
});

module.exports=measurement;