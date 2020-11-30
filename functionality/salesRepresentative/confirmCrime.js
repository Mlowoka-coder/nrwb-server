const express = require('express')
const crime = require('../../dbms/models/crime')

const router = express.Router({mergeParams:true})
const jsonParser = express.json()

router.post('/',jsonParser,(req,res)=>{
    const id = req.body.id

    crime.update({status:'Approved'},{where:{id}}).then((result)=>{
        res.status(200).send(result)
    }).catch(error => res.status(200).send(error))
})

module.exports = router