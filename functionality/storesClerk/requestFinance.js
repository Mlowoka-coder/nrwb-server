const express = require('express')
const financeRequest = require('../../dbms/models/financeRequest')

const router = express.Router({mergeParams:true})
const jsonParser = express.json()

router.post('/',jsonParser,(req,res)=>{
    const storesClerkID = req.body.employeeID
    const amount = req.body.amount

    financeRequest.create({
        storesClerkID,amount
    }).then((financeRequestRow)=>{
        res.status(200).send(financeRequestRow)
    }).catch(error => res.status(200).send(error))
})

module.exports = router