const {DataTypes} =require('sequelize');
const sequelize = require('../connection/connection');

const nationalID = sequelize.define('nationalID',{
    id:{
        type:DataTypes.STRING,
        allowNull:false,
        primaryKey:true,
    },
    idExpiryDate:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    nationality:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    home:{
        type:DataTypes.STRING,
    },
},
{
    tableName:'nationalID'
});

module.exports=nationalID;