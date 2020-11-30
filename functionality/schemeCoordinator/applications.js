const express = require('express')
const application = require('../../dbms/models/application')

const router = express.Router({mergeParams:true})
const jsonParser = express.json()

router.get('/', jsonParser,(req,res)=>{
    application.findAll({
        where:{
            status:'Measured'
        },
    }).then((applicationRow)=>{
        res.status(200).send(applicationRow)
    }).catch(error => res.status(200).send(error))
})

module.exports = router