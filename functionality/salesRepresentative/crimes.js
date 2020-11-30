const express = require('express')
const crime = require('../../dbms/models/crime')
const salesRepresentative = require('../../dbms/models/salesRepresentative')

const router = express.Router({mergeParams:true})
const jsonParser = express.json()

router.get('/',jsonParser,(req,res)=>{
    const employeeID = req.body.employeeID

    salesRepresentative.findOne({
        where: {
            employeeID,
        }
    }).then((salesRepresentativeRow) => {
        crime.findAll({
            where: {
                personnel: 'customer',
                zone:salesRepresentativeRow.zone
            }
        }).then((crimeRow) => {
            res.status(200).send(crimeRow)
        }).catch(error => res.status(200).send(error))
    }).catch(error => res.status(200).send(error))
})

module.exports = router