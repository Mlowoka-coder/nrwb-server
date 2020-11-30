const express = require('express')
const salesRepresentative = require('../../dbms/models/salesRepresentative')
const meter = require('../../dbms/models/meter')

const router = express.Router({mergeParams:true})
const jsonParser = express.json()

router.get('/',jsonParser,(req,res)=>{
    const employeeID = req.body.employeeID

    salesRepresentative.findOne({
        where:{
            employeeID
        }
    }).then((salesRepresentativeRow)=>{
        meter.findAll({
            where:{
                zone:salesRepresentativeRow.zone
            }
        }).then((readingRow)=>{
            res.status(200).send(readingRow)
        }).catch(error => res.status(200).send(error))
    }).catch(error => res.status(200).send(error))
})

module.exports = router