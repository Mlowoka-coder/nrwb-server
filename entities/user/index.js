const express = require('express')
const { route } = require('../home')
const router = express.Router()

router.get('/notifications',(req,res)=>{
    console.log('Request for notifications',req.body)
})

router.post('/apply',(req,res)=>{
    console.log('Request to apply',req.body)
})

router.get('/applications',(req,res)=>{
    console.log('Request to applications',req.body)
})

router.post('/report',(req,res)=>{
    console.log('Request to report',req.body)
})

router.get('/reports',(req,res)=>{
    console.log('Request to reports',req.body)
})

router.get
module.exports = router