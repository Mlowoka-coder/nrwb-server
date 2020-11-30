const express = require('express')
const tariff = require('../../dbms/models/tariff')

const router = express.Router({mergeParams:true})
const jsonParser = express.json()

router.post('/',jsonParser,(req,res)=>{
    const id = req.body.id

    tariff.update({status:'Verified'},{where:{id}}).then((result)=>{
        res.status(200).send(result)
    }).catch(error => res.status(200).send(error))
})

module.exports = router