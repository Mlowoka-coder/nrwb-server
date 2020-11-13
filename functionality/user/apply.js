const application = require('../../orm/models/application')
const task = require('../../orm/models/task')
const plumber = require('../../orm/models/plumber')
const dateIncrement = require('../../functionality/date/dateIncrement')

const applicationFunc = ({natID,longtude,latitude,purpose})=>{
    const created = application.create({
        natID,longtude,latitude,purpose
    })

    return created
}

const taskFunc = ({plumberID,dueDate,type,typeID})=>{
    const created = task.create({
        plumberID,dueDate,type,typeID
    })

    return created
}

const apply = ({natID,purpose,longtude,latitude,zone})=>{
    const plumberRecord = plumber.findOne({
        where:{
            zone
        },
        attributes:['employeeID'],
    })

    const dueDate = dateIncrement(2)

    const plumberID = plumberRecord.employeeID

    const applicationRecord = applicationFunc({natID,longtude,latitude,purpose})

    if(applicationRecord){
        const typeID = applicationRecord.id
        if(taskFunc({plumberID,dueDate,type:'New Connection',typeID}))        
            return 'success'
    }else return 'error'

    


}

module.exports = apply