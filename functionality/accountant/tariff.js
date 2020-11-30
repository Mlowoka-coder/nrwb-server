const express = require('express')
const tariff = require('../../dbms/models/tariff')

const router = express.Router({mergeParams:true})
const jsonParser = express.json()

router.get('/',jsonParser,(req,res)=>{
    tariff.findAll().then((tariffRow)=>{
        res.status(200).send(tariffRow)
    }).catch(error => res.status(200).send(error))
})

module.exports = router