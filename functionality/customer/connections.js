const express = require('express')
const meter = require('../../dbms/models/meter')

const router = express.Router({mergeParams:true})
const jsonParser = express.json()

router.get('/',jsonParser,(req,res)=>{
    const owner = req.body.customerID

    meter.findAll({
        where:{
            owner,
        }
    }).then((meterRow)=>{
        res.status(200).send(meterRow)
    }).catch(error => res.status(200).send(error))
})

module.exports = router