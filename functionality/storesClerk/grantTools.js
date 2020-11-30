const express = require('express')
const toolsRequest = require('../../dbms/models/toolsRequest')

const router = express.Router({mergeParams:true})
const jsonParser = express.json()

router.post('/',jsonParser,(req,res)=>{
  const id = req.body.id

  toolsRequest.update({status:'Granted'},{where:{id}}).then((result)=>{
    res.status(200).send(result)
  }).catch(error => res.status(200).send(error))
})

module.exports = router