const express = require('express')
const user = require('../../dbms/models/user')

const router = express.Router({mergeParams:true})
const jsonParser = express.json()

router.get('/',jsonParser,(req,res)=>{
    user.findAll().then((userRow)=>{
        res.status(200).send(userRow)
    }).catch(error => res.status(200).send(error))
})

module.exports = router