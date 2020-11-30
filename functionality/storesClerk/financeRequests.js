const express = require('express')
const financeRequest = require('../../dbms/models/financeRequest')

const router = express.Router({mergeParams:true})
const jsonParser = express.json()

router.get('/',jsonParser,(req,res)=>{
    const storesClerkID = req.body.employeeID

    financeRequest.findAll({where:{
        storesClerkID
    }}).then((financeRequestRow)=>{
        res.status(200).send(financeRequestRow)
    }).catch(error => res.status(200).send(error))
})

module.exports = router