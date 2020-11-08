const {DataTypes,references} =require('sequelize');
const sequelize = require('../connection/connection');
const nationalID = require('./nationalID');

const crime = sequelize.define('crime',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },
    offendant:{
        type:DataTypes.STRING,
        allowNull:false,
        references:{
            model:nationalID,
            key:'id',
        },
    },
    crime:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    witnessID:{
        type:DataTypes.STRING,
        allowNull:false,
        references:{
            model:nationalID,
            key:'id',
        },
        defaultValue:'null'
    },
    reporterID:{
        type:DataTypes.STRING,
        allowNull:false,
        references:{
            model:nationalID,
            key:'id',
        },
    },
    status:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:'Unapproved',
    }
});

module.exports=crime;