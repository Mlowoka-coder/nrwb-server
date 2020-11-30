const express = require('express')
const crime = require('../../dbms/models/crime')
const plumber = require('../../dbms/models/plumber')

const router = express.Router({ mergeParams: true })
const jsonParser = express.json()

router.get('/', jsonParser, (req, res) => {
    const employeeID = req.body.employeeID

    plumber.findOne({
        where: {
            employeeID,
        }
    }).then((plumberRow) => {
        crime.findAll({
            where: {
                personnel: 'customer',
                zone:plumberRow.zone
            }
        }).then((crimeRow) => {
            res.status(200).send(crimeRow)
        }).catch(error => res.status(200).send(error))
    }).catch(error => res.status(200).send(error))
})

module.exports = router