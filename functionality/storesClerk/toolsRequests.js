const express = require('express')
const toolsRequest = require('../../dbms/models/toolsRequest')

const router = express.Router({mergeParams:true})
const jsonParser = express.json()

router.get('/',jsonParser,(req,res)=>{
    const storesClerkID = req.body.employeeID

    toolsRequest.findAll({
        where:{
            storesClerkID
        }
    }).then((toolsRequestRow)=>{
        res.status(200).send(toolsRequestRow)
    }).catch(error => res.status(200).send(error))
})

module.exports = router