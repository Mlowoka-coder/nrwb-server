const express = require('express')
const store = require('../../dbms/models/store')

const router = express.Router({mergeParams:true})
const jsonParser = express.json()

router.get('/',jsonParser,(req,res)=>{
    store.findAll().then((storeRow)=>{
        res.status(200).send(storeRow)
    }).catch(error => res.status(200).send(error))
})

module.exports = router