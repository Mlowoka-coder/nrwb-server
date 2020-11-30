const express = require('express')
const toolsRequest = require('../../dbms/models/toolsRequest')

const router = express.Router({mergeParams:true})
const jsonParser = express.json()

router.get('/',jsonParser,(req,res)=>{
    const plumberID = req.body.employeeID

    toolsRequest.findAll({where:{
        plumberID
    }}).then((financeRequestRow)=>{
        res.status(200).send(financeRequestRow)
    }).catch(error => res.status(200).send(error))
})

module.exports = router