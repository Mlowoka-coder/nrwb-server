const express = require('express')
const task = require('../../dbms/models/task')

const router = express.Router({mergeParams:true})
const jsonParser = express.json()

router.post('/', jsonParser,(req,res)=>{
    const id = req.body.id

    task.update({status:'Start Billing'},{where:{id,type:'Billing Request'}}).then((updateResult)=>{
        res.status(200).send(updateResult)
    }).catch(error => res.status(200).send(error))
})

module.exports = router