const report = require('../../orm/models/faultReport')

const CreateReportFunc = ({id,taskID,dueDate,type})=>{
    const created = report.create({
        id,taskID,dueDate,type
    })

    return created
}

const reportFunc = ()=>{
    CreateReportFunc({id,taskID,dueDate,type})
}


module.exports = reportFunc