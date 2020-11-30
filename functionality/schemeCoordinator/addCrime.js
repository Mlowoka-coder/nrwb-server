const express = require('express')
const crime = require('../../dbms/models/crime')
const supervisor = require('../../dbms/models/supervisor')
const user = require('../../dbms/models/user')

const router = express.Router({mergeParams:true})
const jsonParser = express.json()

router.post('/', jsonParser,(req,res)=>{
    const reporterID = req.body.accID
    const employeeID = req.body.id
    const crimeType = req.body.crime
    
    supervisor.findByPk(employeeID).then((supervisorRow)=>{
        user.findOne({where:{
            natID:supervisorRow.natID
        }}).then((userRow)=>{
            crime.create({
                offendant:userRow.accID,
                personnel:'Supervisor',
                crime:crimeType,
                reporterID
            }).then((crimeRow)=>{
                res.status(200).send(crimeRow)
            }).catch(error => res.status(200).send(error))
        }).catch(error => res.status(200).send(error))
    }).catch(error => res.status(200).send(error))
})

module.exports = router