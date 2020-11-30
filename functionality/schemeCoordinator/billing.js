const express = require('express')
const task = require('../../dbms/models/task')

const router = express.Router({mergeParams:true})
const jsonParser = express.json()

router.get('/', jsonParser,(req,res)=>{
    task.findAll({
        where:{
            type:'Billing Request',
            status:'Unaccomplished'
        }
    }).then((taskRow)=>{
        res.status(200).send(taskRow)
    }).catch(error => res.status(200).send(error))
})

module.exports = router