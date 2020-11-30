const express = require('express')
const meter = require('../../dbms/models/meter')

const router = express.Router({mergeParams:true})
const jsonParser = express.json()

router.get('/', jsonParser,(req,res)=>{
    const id = req.body.meterNo
    const clas = req.body.clas
    meter.create({
       id,class:clas
    }).then((meterRow)=>{
        res.status(200).send(meterRow)
    }).catch(error => res.status(200).send(error))
})

module.exports = router