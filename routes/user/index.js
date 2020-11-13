const express = require('express')
const jsonParser = express.json()
const router = express.Router()

router.post('/apply',jsonParser,(req,res)=>{
    console.log('Request to apply')
})

router.get('/applications',jsonParser,(req,res)=>{
    console.log('Request to applications')
})

router.post('/report',jsonParser,(req,res)=>{
    console.log('Request to report')
})

router.get('/reports',jsonParser,(req,res)=>{
    console.log('Request to reports')
})

router.get('/notifications',jsonParser,(req,res)=>{
    console.log('Request for notifications',req.body)
})
module.exports = router