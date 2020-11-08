const {DataTypes,references} =require('sequelize');
const sequelize = require('../connection/connection');
const plumber = require('./plumber');
const storesClerk = require('./storesClerk');
const toolsList = require('./toolsList');

const toolsRequest = sequelize.define('toolsRequest',{
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
            key:'id',
        },
    },
    storesClerkID:{
        type:DataTypes.STRING,
        allowNull:false,
        references:{
            model:storesClerk,
            key:'id',
        },
    },
    toolsListID:{
        type:DataTypes.STRING,
        allowNull:false,
        references:{
            model:toolsList,
            key:'id'
        }
    },
    status:{
        type:DataTypes.STRING,
        allowNull:false,
    }
});

module.exports=toolsRequest;