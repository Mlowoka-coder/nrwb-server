const {DataTypes} =require('sequelize');
const sequelize = require('../connection/connection');

const store = sequelize.define('store',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },
    item:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    amount:{
        type:DataTypes.STRING,
        allowNull:false,
    },
},
{
    tableName:'store'
});

module.exports = store;