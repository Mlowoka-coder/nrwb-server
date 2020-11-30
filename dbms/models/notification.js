const {DataTypes,references} =require('sequelize');
const sequelize = require('../connection/connection');

const notification = sequelize.define('notification',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },
    receipient:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    reason:{
        type:DataTypes.STRING,
        defaultValue:'Active'
    },
    status:{
        type:DataTypes.STRING,
        allowNull:false,
    },
},{
    tableName:'notification'
});

module.exports=notification;