const express = require('express')
const crime = require('../../dbms/models/crime')
const meter = require('../../dbms/models/meter')
const user = require('../../dbms/models/user')
const customer = require('../../dbms/models/customer')
const plumber = require('../../dbms/models/plumber')

const router = express.Router({mergeParams:true})
const jsonParser = express.json()

router.post('/', jsonParser,(req,res)=>{
    const id = req.body.id
    const crimeType = req.body.crime
    const accID = req.body.accID
    const employeeID = req.body.employeeID
    
    meter.findByPk(id).then((meterRow)=>{
        const customerID = meterRow.owner

        customer.findByPk(customerID).then((customerRow)=>{
            user.findOne({
                where:{
                    natID:customerRow.natID
                }
            }).then((userRow)=>{
                plumber.findByPk(employeeID).then((plumberRow)=>{
                    crime.create({
                        offendant:userRow.accID,
                        personnel:'Customer',
                        crime:crimeType,
                        reporterID:accID,
                        zone:plumberRow.zone,
                        witnessID:'',
                    }).then((crimeRow)=>{
                        res.status(200).send(crimeRow)
                    }).catch(error => res.status(200).send(error))
                }).catch(error => res.status(200).send(error))
            }).catch(error => res.status(200).send(error))
        }).catch(error => res.status(200).send(error))
    }).catch(error => res.status(200).send(error))
})

module.exports = router