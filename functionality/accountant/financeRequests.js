const express = require('express')
const financeRequest = require('../../dbms/models/tariff')

const router = express.Router({mergeParams:true})
const jsonParser = express.json()

router.get('/',jsonParser,(req,res)=>{
    financeRequest.findAll().then((financeRequestRow)=>{
        res.status(200).send(financeRequestRow)
    }).catch(error => res.status(200).send(error))
})

module.exports = router