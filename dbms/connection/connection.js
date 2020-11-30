const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('sqlite:../database/nrwb.sqlite',{define:{freezeTableName:true}});

sequelize.authenticate().then(console.log('Database Connection Successful')).catch( ()=>console.log('Error in creating',error))

module.exports = sequelize;
