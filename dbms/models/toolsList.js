const {DataTypes} =require('sequelize');
const sequelize = require('../connection/connection');

const toolsList = sequelize.define('toolsList',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },
    pipeSize:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    pipeAmount:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
},
{
    tableName:'toolsList'
});

module.exports=toolsList;