const report = require('../../orm/models/faultReport')

const reportFunc = ({data})=>{
    const reports = report.findAll({
        where:{
            reporterID:data.id
        }
    })

    return reports
}

module.exports = reportFunc