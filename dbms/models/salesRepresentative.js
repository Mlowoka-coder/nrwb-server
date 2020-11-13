const {DataTypes,references} =require('sequelize');
const sequelize = require('../connection/connection');
const nationalID = require('./nationalID');

const salesRepresentative = sequelize.define('salesRepresentative',{
    employeeID:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },
    natID:{
        type:DataTypes.STRING,
        allowNull:false,
        references:{
            model:nationalID,
            key:'id',
        }
    },
    status:{
        type:DataTypes.STRING,
        defaultValue:'Active'
    },
    zone:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    district:{
        type:DataTypes.STRING,
        allowNull:false
    }
});

module.exports=salesRepresentative;