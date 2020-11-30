const express = require('express')
const lodash = require('lodash')
const user = require('../../dbms/models/user')
const nationalID = require('../../dbms/models/nationalID')
const hash = require('password-hash')

const router = express.Router({mergeParams:true})

const jsonParser = express.json()

router.post('/',jsonParser,(req,res)=>{
        console.log('Request to sign up')

        let data = {
                accID:null,
                position:null,
                customerID:null,
                employeeID:null, 
            }

        const dob = req.body.dob
        const number = req.body.phone
        const email = req.body.email
        const idExpiryDate = req.body.idEx
        const fname = lodash.upperFirst(lodash.toLower(req.body.firstname))
        const lname = lodash.upperFirst(lodash.toLower(req.body.lname))
        const initial = lodash.upperFirst(lodash.toLower(req.body.initial))
        const gender = lodash.upperFirst(lodash.toLower(req.body.gender))
        const status = lodash.upperFirst(lodash.toLower(req.body.status))
        const district = lodash.upperFirst(lodash.toLower(req.body.district))
        const area = lodash.upperFirst(lodash.toLower(req.body.area))
        const natID = lodash.toUpper(lodash.toLower(req.body.idNo))
        const nationality = lodash.upperFirst(req.body.nationality)
        const home = lodash.upperFirst(lodash.toLower(req.body.home))
        const password = hash.generate(req.body.password1)

        nationalID.findOrCreate({
                where:{
                        id:natID
                },
                defaults:{
                        idExpiryDate,nationality,home
                }
        }).then(([row,created])=>{
                if(!created){
                        res.status(200).send('National ID already exists')
                }

                user.create({
                      fname,lname,initial,dob,
                      gender,status,district,email,
                      number,area,password,natID
                }).then((row)=>{
                        if(row){
                                data.accID = row.accID
                                res.status(200).send(data)
                        }
                        res.status(200).send('Sorry, Error in creating user account')
                }).catch((err)=>{
                        res.status(200).send(err)
                })
        }).catch((err)=>{
                res.status(200).send(err)
        })
})

module.exports = router