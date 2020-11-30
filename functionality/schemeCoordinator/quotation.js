const express = require('express')
const application = require('../../dbms/models/application')
const bill = require('../../dbms/models/bill')
const task = require('../../dbms/models/task')
const customer = require('../../dbms/models/customer')
const measurement = require('../../dbms/models/measurement')
const tariff = require('../../dbms/models/tariff')
const plumber = require('../../dbms/models/plumber')
const dateIncrement = require('../date/dateIncrement')

const router = express.Router({mergeParams:true})
const jsonParser = express.json()

router.post('/', jsonParser,(req,res)=>{
    const type = req.body.type
    const applicationID = req.body.applicationID
    const payer = req.body.accID
    const zone = req.body.zone

    tariff.findOne({
        where:{
            type
        }
    }).then((tariffRow)=>{
        measurement.findOne({
            where:{
                applicationID
            }
        }).then((measurementRow)=>{
            const amount = measurementRow.distance * tariffRow.rate
            
            customer.findOrCreate({
                where:{
                    userID:applicationID
                },
            }).then(([customerRow,created])=>{
                const balance = amount * customerRow.balance

                customer.update({balance},{where:{customerID:customerRow.customerID}}).then(()=>{
                    bill.create({
                        
                    }).then(()=>{
                        bill.create({
                            payer,amount,balance,purpose:'New Connection',tariffRate:tariffRow.rate
                        }).then(()=>{
                            application.update({status:'Qouted'},{where:{id:applicationID}}).then(()=>{
                                plumber.findOne({
                                    where:{
                                        zone
                                    }
                                }).then((plumberRow)=>{
                                    task.create({
                                        employeeID:plumberRow.employeeID,
                                        employeePosition:'Plumber',
                                        dueDate:dateIncrement(2),
                                        type:'New Connection',
                                        typeID:applicationID
                                    }).then((taskRow)=>{
                                        res.status(200).send(taskRow)
                                    }).catch(error =>res.status(200).send(error))
                                }).catch(error =>res.status(200).send(error))
                            })
                        }).catch(error =>res.status(200).send(error))
                    }).catch(error =>res.status(200).send(error))
                }).catch(error =>res.status(200).send(error))
            }).catch(error =>res.status(200).send(error))
        }).catch(error =>res.status(200).send(error))
    }).catch(error =>res.status(200).send(error))
})

module.exports = router