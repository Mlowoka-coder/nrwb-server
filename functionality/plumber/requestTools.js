const express = require('express')
const toolsRequest = require('../../dbms/models/toolsRequest')
const toolsList = require('../../dbms/models/toolsList')

const router = express.Router({mergeParams:true})
const jsonParser = express.json()

router.post('/',jsonParser,(req,res)=>{
    const plumberID = req.body.employeeID
    const list = req.body.toolsList

    toolsList.create({
        pipeSize:list.pipeSize,
        pipeAmount:list.pipeAmount
    }).then((toolsListRow)=>{
        toolsRequest.create({
            plumberID,toolsListID:toolsListRow.id
        }).then((financeRequestRow)=>{
            res.status(200).send(financeRequestRow)
        }).catch(error => res.status(200).send(error))
    }).catch(error => res.status(200).send(error))    
})

module.exports = router