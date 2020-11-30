const express = require('express')
const reading = require('../../dbms/models/reading')
const bill = require('../../dbms/models/bill')
const tariff = require('../../dbms/models/tariff')
const meter = require('../../dbms/models/meter')
const customer = require('../../dbms/models/customer')

const router = express.Router({mergeParams:true})
const jsonParser = express.json()

router.post('/',jsonParser,(req,res)=>{
    reading.findAll({where:{
        status: 'Uncalculated'
    }}).then((readingRow)=>{
        tariff.findOne({where:{type:'Distance'}}).then((tariffRow)=>{
            readingRow.every((row)=>{
                meter.findOne({
                    where:{
                        id:row.meterID
                    }
                }).then((meterRow)=>{
                    const usage = row.newReading - row.lastReading
                    const amount = usage * tariffRow.rate
                    const balance = meterRow.balance + amount
                    bill.create({
                        payer:meterRow.owner,
                        amount,
                        balance,
                        purpose:'New Bill',
                        tariffRate:tariffRow.rate
                    }).then((billRow)=>{
                        reading.update({status:'Calculated'},{where:{id:row.id}}).then((result)=>{
                            const date = new Date()
                            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                            const lastReadMonth = months[date.getMonth()]  

                            meter.update({
                                lastReading:row.newReading,
                                balance,
                                lastReadMonth,
                            }).then((result)=>{
                                customer.update({balance},{where:{customerID:meterRow.owner}}).catch(error => res.status(200).send(error))
                            }).catch(error => res.status(200).send(error))
                        }).catch(error => res.status(200).send(error))
                    }).catch(error => res.status(200).send(error))
                }).catch(error => res.status(200).send(error))                    
            })
        }).catch(error => res.status(200).send(error))
    }).catch(error => res.status(200).send(error))
})

module.exports = router