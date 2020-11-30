const express = require('express')
const crime = require('../../dbms/models/crime')

const router = express.Router({ mergeParams: true })
const jsonParser = express.json()

router.get('/', jsonParser, (req, res) => {
    const employeeID = req.body.employeeID


    crime.findAll({
        where: {
            personnel: 'supervisor',
        }
    }).then((crimeRow) => {
        res.status(200).send(crimeRow)
    }).catch(error => res.status(200).send(error))
})

module.exports = router