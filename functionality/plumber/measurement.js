const express = require('express')
const application = require('../../dbms/models/application')
const measurement = require('../../dbms/models/measurement')

const router = express.Router({mergeParams:true})
const jsonParser = express.json()

router.post('/', jsonParser,(req,res)=>{
    const id = req.body.id
    const applicationID = req.body.applicationID
    const distance = req.body.distance

    measurement.create({
        applicationID,distance
    }).then(()=>{
        application.update({status:'Measured'},{where:{id}}).then((result)=>{
            req.status(200).send(result)
        }).catch(error => res.status(200).send(error))
    }).catch(error => res.status(200).send(error))
})

module.exports = router