const express = require('express')
const task = require('../../dbms/models/task')
const plumber = require('../../dbms/models/plumber')

const router = express.Router({mergeParams:true})
const jsonParser = express.json()

router.get('/', jsonParser,(req,res)=>{
    const employeeID = req.body.employeeID

    plumber.findByPk(employeeID).then((plumberRow)=>{
        task.findAll({where:{
            zone:plumberRow.zone,employeePosition:'Plumber'
        }}).then((taskRow)=>{
            res.status(200).send(taskRow)
        }).catch(error => res.status(200).send(error))
    }).catch(error => res.status(200).send(error))
    
})

module.exports = router