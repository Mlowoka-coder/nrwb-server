const express = require('express')
const bill = require('../../dbms/models/bill')

const router = express.Router({mergeParams:true})
const jsonParser = express.json()

router.post('/',jsonParser,(req,res)=>{
    const payer = req.body.accID

    bill.update({status:'Approved'},{where:{
        status:'Unapproved',
        payer
    }}).then((result)=>{
        res.status(200).send(result)
    }).catch(error => res.status(200).send(error))
})

module.exports = router