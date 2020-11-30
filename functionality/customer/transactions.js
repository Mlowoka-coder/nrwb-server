const express = require('express')
const bill = require('../../dbms/models/bill')

const router = express.Router({mergeParams:true})
const jsonParser = express.json()

router.get('/',jsonParser,(req,res)=>{
    const payer = req.body.accID

    bill.findAll({
        where:{
            payer
        }
    }).then((billRow)=>{
        res.status(200).send()
    }).catch(error => res.status(200).send(error))
})

module.exports = router