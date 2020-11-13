const express = require('express')
const signUP = require('../../functionality/home/signUp')
const logIn = require('../../functionality/home/logIn')

const router = express.Router()

const jsonParser = express.json()

router.post('/signUp',jsonParser,(req,res)=>{
    console.log('Request to sign up')
    const fname = req.body.firstname
    const lname = req.body.lastname
    const initial = req.body.initial
    const dob = req.body.dob
    const gender = req.body.gender
    const status = req.body.status
    const number = req.body.phone
    const email = req.body.email
    const district = req.body.district
    const area = req.body.area
    const natID = req.body.idNo
    const idExpiryDate = req.body.idEx
    const nationality = req.body.nationality
    const home = req.body.home
    const password = req.body.password1
    res.status(422).send(signUP(fname,lname,initial,dob,gender,status,number,email,district,area,natID,idExpiryDate,nationality,home,password))
})

router.post('/logIn',jsonParser,(req,res)=>{
    console.log('Request to log in')
    const id = req.body.id
    const password = req.body.password
    try{
        let data = logIn(id,password)
        
    }catch(err){
        res.status(422).send(err)
    }
})

router.get('/topics',()=>{
    console.log('Request to topics')
})

module.exports = router