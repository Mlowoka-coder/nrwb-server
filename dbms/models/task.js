const {DataTypes,references} =require('sequelize');
const sequelize = require('../connection/connection');
const plumber = require('./plumber');

const task = sequelize.define('task',{
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
    dueDate:{
        type:DataTypes.DATEONLY,
        allowNull:false,
    },
    status:{
        type:DataTypes.STRING,
        defaultValue:'Unaccomplished'
    },
    type:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    typeID:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    counter:{
        type:DataTypes.INTEGER,
        defaultValue:0
    },
});

module.exports=task;