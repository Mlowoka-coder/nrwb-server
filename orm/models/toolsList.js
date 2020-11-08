const {DataTypes,references} =require('sequelize');
const sequelize = require('../connection/connection');
const accountant = require('./accountant');
const storesClerk = require('./storesClerk');

const toolsList = sequelize.define('toolsList',{
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
    typeID:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    pipeSize:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    pipeAmount:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
});

module.exports=toolsList;