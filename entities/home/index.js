const express = require('express')
const signUP = require('../../functionality/home/signUp/index')
const logIn = require('../../functionality/home/logIn/index')

const router = express.Router()

const jsonParser = express.json()

router.post('/signUp',jsonParser,(req,res)=>{
    console.log('Request to sign up')
    signUP(req.body)
    res.send('fine')
})

router.post('/logIn',jsonParser,(req,res)=>{
    console.log('Request to log in')
    logIn(req.body)
    res.send('fine')
})

router.get('/topics',(req,res)=>{
    console.log('Request to topics')
})
module.exports = router