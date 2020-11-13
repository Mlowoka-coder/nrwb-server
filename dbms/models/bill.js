const {DataTypes,references} =require('sequelize');
const sequelize = require('../connection/connection');
const user = require('./user');
const tariff = require('./tariff');

const bill = sequelize.define('bill',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },
    payer:{
        type:DataTypes.STRING,
        allowNull:false,
        references:{
            model:user,
            key:'id',
        },
        defaultValue:'null'
    },
    amount:{
        type:DataTypes.DOUBLE,
        allowNull:false,
    },
    balance:{
        type:DataTypes.DOUBLE,
        allowNull:false,
    },
    purpose:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    status:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:'Unapproved',
    },
    tariffRate:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:tariff,
            key:'id'
        }
    }
},
{
    tableName:'bill'
});

module.exports = bill;