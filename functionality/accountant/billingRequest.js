const express = require('express')
const task = require('../../dbms/models/task')
const dateIncrement = require('../date/dateIncrement')

const router = express.Router({mergeParams:true})
const jsonParser = express.json()

router.post('/',jsonParser,(req,res)=>{
    const employeeID = req.body.employeeID
    const position = 'Accountant'
    const dueDate = dateIncrement(2)
    const type = 'Billing Request'
    
    task.create({
        employeeID,position,dueDate,type
    }).then((billRow)=>{
        res.status(200).send(billRow)
    }).catch(error => res.status(200).send(error))
})

module.exports = router