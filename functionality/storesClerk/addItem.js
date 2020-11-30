const express = require('express')
const store = require('../../dbms/models/store')

const router = express.Router({mergeParams:true})
const jsonParser = express.json()

router.post('/',jsonParser,(req,res)=>{
    const item = req.body.item
    const amount = req.body.amount

    store.findOrCreate({
        where:{
            item
        }
    }).then((storeRow)=>{
        store.update({amount},{where:{item}}).then((result)=>{
            res.status(200).send(result)
        }).catch(error => res.status(200).send(error))
    }).catch(error => res.status(200).send(error))
})

module.exports = router