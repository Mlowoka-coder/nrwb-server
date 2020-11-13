const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('sqlite:../database/nrwb.sqlite',{define:{freezeTableName:true}});

try{
    sequelize.authenticate()
    console.log('Database Connection Successful')
}catch(error){
    console.log('Error in creating',error)
}

sequelize.sync()
module.exports = sequelize;
