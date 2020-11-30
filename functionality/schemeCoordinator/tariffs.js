const express = require('express')
const tariff = require('../../dbms/models/tariff')

const router = express.Router({mergeParams:true})
const jsonParser = express.json()

router.get('/', jsonParser,(req,res)=>{
    tariff.findAll({
        attributes:['rate','type']
    }).then((tariffRow)=>{
        res.status(200).send(tariffRow)
    }).catch()
})

module.exports = router