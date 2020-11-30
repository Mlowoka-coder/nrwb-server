const express = require('express')
const application = require('../../dbms/models/application')
const plumber = require('../../dbms/models/plumber')

const router = express.Router({mergeParams:true})
const jsonParser = express.json()

router.get('/', jsonParser,(req,res)=>{
    const employeeID = req.body.employeeID

    plumber.findByPk(employeeID).then((plumberRow)=>{
        application.findAll({
            where:{
                type:'Measurement',
                status:'Measure',
                zone:plumberRow.zone
            }
        }).then((applicationRow)=>{
            res.status(200).send(applicationRow)
        }).catch(error => res.status(200).send(error))
    }).catch(error => res.status(200).send(error))
    
})

module.exports = router