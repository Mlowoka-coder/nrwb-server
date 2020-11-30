const express = require('express')
const application = require('../../dbms/models/application')
const plumber = require('../../dbms/models/plumber')
const task = require('../../dbms/models/task')
const dateIncrement = require('../date/dateIncrement')
const lodash = require('lodash')

const router = express.Router({mergeParams:true})
const jsonParser = express.json()

router.post('/', jsonParser,(req,res)=>{

    const accID = req.body.accID
    const zone = lodash.upperFirst(lodash.toLower(req.body.location))
    const purpose = lodash.upperFirst(lodash.toLower(req.body.purpose))
    const latitude = lodash.upperFirst(lodash.toLower(req.body.latitude))
    const longtude = lodash.upperFirst(lodash.toLower(req.body.longtude))

    application.create({
        accID,zone,purpose,latitude,longtude
    }).then((applicationRow)=>{
        if(applicationRow != null){
            plumber.findOne({
                where:{
                    zone
                }
            }).then((plumberRow)=>{
                

                task.create({
                    employeeID:plumberRow.employeeID,
                    employeePosition:'Plumber',
                    dueDate:dateIncrement(2),
                    type:'Measurement',
                    typeID:applicationRow.id
                }).then((taskRow)=>{
                    res.status(200).send(taskRow)
                }).catch(error =>res.status(200).send(error))


            })
        }
        res.status(200).send('Error in creating application')
    }).catch((error)=>res.status(200).send(error))
})

module.exports = router