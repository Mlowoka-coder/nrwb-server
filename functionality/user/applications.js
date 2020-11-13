const application = require('../../orm/models/application')

const applicationRecord = (userID)=>{
    const records = application.findAll({
        where:{
            natID:userID
        }
    })

    console.log(records)
}

module.exports = applicationRecord