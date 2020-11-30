const {DataTypes} =require('sequelize');
const sequelize = require('../connection/connection');

const task = sequelize.define('task',{
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
    employeePosition:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    dueDate:{
        type:DataTypes.DATEONLY,
        allowNull:false,
    },
    status:{
        type:DataTypes.STRING,
        defaultValue:'Unaccomplished'
    },
    read:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    },
    type:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    typeID:{
        type:DataTypes.STRING,
    },
    counter:{
        type:DataTypes.INTEGER,
        defaultValue:0
    },
    lastCounter:{
        type:DataTypes.INTEGER,
        defaultValue:0
    }
});

module.exports=task;