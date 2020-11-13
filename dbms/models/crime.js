const {DataTypes,references} =require('sequelize');
const sequelize = require('../connection/connection');
const user = require('./user');

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
            model:user,
            key:'id',
        },
    },
    crime:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    witnessID:{
        type:DataTypes.STRING,
        references:{
            model:user,
            key:'id',
        },
        defaultValue:'null'
    },
    reporterID:{
        type:DataTypes.STRING,
        references:{
            model:user,
            key:'id',
        },
        allowNull:false,
    },
    status:{
        type:DataTypes.STRING,
        defaultValue:'Unapproved',
    }
});

module.exports=crime;