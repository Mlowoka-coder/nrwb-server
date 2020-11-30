const express = require('express')
const financeRequest = require('../../dbms/models/financeRequest')

const router = express.Router({mergeParams:true})
const jsonParser = express.json()

router.post('/',jsonParser,(req,res)=>{
    financeRequest.update({status:'Approved'}).then((result)=>{
        res.status(200).send(result)
    }).catch(error => res.status(200).send(error))
})

module.exports = router