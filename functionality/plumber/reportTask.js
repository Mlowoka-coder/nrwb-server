const express = require('express')
const taskReport = require('../../dbms/models/taskReport')

const router = express.Router({mergeParams:true})
const jsonParser = express.json()

router.post('/',jsonParser,(req,res)=>{
    const employeeID = req.body.employeeID
    const taskID = req.body.taskID

    taskReport.create({
        employeeID,taskID
    }).then((taskReportRow)=>{
        res.status(200).send(taskReportRow)
    }).catch(error => res.status(200).send(error))
})

module.exports = router