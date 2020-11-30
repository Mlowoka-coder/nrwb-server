const {DataTypes,references} =require('sequelize');
const sequelize = require('../connection/connection');
const accountant = require('./accountant');
const storesClerk = require('./storesClerk');

const financeRequest = sequelize.define('financeRequest',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },
    accountantID:{
        type:DataTypes.STRING,
        defaultValue:null,
        references:{
            model:accountant,
            key:'employeeID',
        },
    },
    storesClerkID:{
        type:DataTypes.STRING,
        allowNull:false,
        references:{
            model:storesClerk,
            key:'employeeID',
        },
    },
    amount:{
        type:DataTypes.DOUBLE,
        allowNull:false,
    },
    status:{
        type:DataTypes.STRING,
        defaultValue:'Unapproved'
    },
    viewStatus:{
        type:DataTypes.STRING,
        defaultValue:'Unviewed'
    }
});

module.exports=financeRequest;