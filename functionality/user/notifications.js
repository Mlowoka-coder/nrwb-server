const { json } = require('express')
const express = require('express')

const router = express.Router({mergeParams:true})
const jsonParser = express.json()

router.get('/',jsonParser,(req,res)=>{

})

module.exports = router