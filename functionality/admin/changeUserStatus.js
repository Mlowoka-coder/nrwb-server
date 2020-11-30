const express = require('express')
const user = require('../../dbms/models/user')

const router = express.Router({mergeParams:true})
const jsonParser = express.json()

router.post('/',jsonParser,(req,res)=>{
    const accID = req.body.accID
    
    user.findOne({where:{
        accID
    }}).then((userRow)=>{
        if(userRow.status === 'Active')
            user.update({account:'Deactive'},{where:{accID}}).then((result)=>res.status(200).send(result))
        else user.update({account:'Active'},{where:{accID}}).then((result)=>res.status(200).send(result))
    })
})

module.exports = router