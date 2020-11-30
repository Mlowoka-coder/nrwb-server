const express = require('express')
const application = require('../../dbms/models/application')

const router = express.Router({mergeParams:true})
const jsonParser = express.json()

router.get('/',jsonParser,(req,res)=>{

    const accID = req.body.accID

    application.findAll({
        where:{
            accID
        }
    }).then((applicationRows)=>{
        res.status(200).send(applicationRows)
    }).catch(error => res.status(200).send(error))
})

module.exports = router