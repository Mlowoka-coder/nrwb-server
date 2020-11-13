const {DataTypes,references} =require('sequelize');
const sequelize = require('../connection/connection');
const nationalID = require('./nationalID');

const user = sequelize.define('user',{
    accID:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    fname:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    lname:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    initial:{
        type:DataTypes.STRING,
        defaultValue:''
    },
    dob:{
        type:DataTypes.DATEONLY,
        allowNull:false,
    },
    gender:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    status:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    number:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        defaultValue:''
    },
    district:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    area:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    natID:{
        type:DataTypes.STRING,
        allowNull:false,
        references:{
            model:nationalID,
            key:'id'
        }
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    role:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:'Non-employee'
    },
    account:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:'Active'
    },
},{
    tableName:'user',
});

module.exports = user;