const express = require('express')
const lodash = require('lodash')
const faultReport = require('../../dbms/models/faultReport')
const meter = require('../../dbms/models/meter')
const plumber = require('../../dbms/models/plumber')
const task = require('../../dbms/models/task')
const dateIncrement = require('../date/dateIncrement')

const router = express.Router({mergeParams:true})
const jsonParser = express.json()

router.post('/', jsonParser,(req,res)=>{

    const type = lodash.capitalize(lodash.toLower(req.body.type))
    const time = lodash.capitalize(lodash.toLower(req.body.time))
    const reminder = lodash.upperFirst(lodash.toLower(req.body.reminder))
    const contact = req.body.contact
    const reporterID = req.body.customerID
    const meterNumber = req.body.meter

    if(reminder === 'No'){
        faultReport.create({
            type,time,reminder,contact,reporterID
        }).then((faultReportRow)=>{
            meter.findOne({
                where:{
                    id:meterNumber
                },
                attributes:['zone']
            }).then((meterRow)=>{
                plumber.findOne({
                    where:{
                        zone:meterRow.zone
                    },
                    attributes:['employeeID']
                }).then((plumberRow)=>{
                    task.create({
                        employeeID:plumberRow.employeeID,
                        employeePosition:'Plumber',
                        dueDate:dateIncrement(2),
                        type:'Fault Report',
                        typeID:faultReportRow.id
                    }).then((taskRow)=>{
                        res.status(200).send(taskRow)
                    }).catch(error =>res.status(200).send(error))
                }).catch(error => res.status(200).send(error))
            }).catch(error =>res.status(200).send(error))
        }).catch(error => res.status(200).send(error))
    }else{
        faultReport.findOne({
            where:{
                reporterID,
                type,
                status:'Unconfirmed'
            },
            attributes:['id']
        }).then((faultReportRow)=>{
            task.increment('counter')
        }).catch(error => res.status(200).send(error))
    }
    
})

module.exports = router