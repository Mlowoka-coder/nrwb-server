const express = require('express')
const nationalID = require('../../dbms/models/nationalID')

const router = express.Router({ mergeParams: true })
const jsonParser = express.json()

router.post('/', jsonParser, (req, res) => {
    const position = req.body.position
    const id = req.body.id
    const zone = req.body.zone
    const district = req.body.district
    const idExpiryDate = req.body.idEx
    const home = req.body.home
    const nationality = req.body.nationality

    nationalID.findOrCreate({
        where: {
            id
        },
        defaults: {
            idExpiryDate, nationality, home
        }
    }).then((nationalIDRow) => {
        switch (position) {
            case 'PLUMBER':
                const plumber = require('../../dbms/models/plumber')

                plumber.create({
                    natID:id,zone,district,
                }).then((plumberRow)=>{
                    res.status(200).send(plumberRow)
                }).catch(error => res.status(200).send(error))
                break
            case 'SALES REPRESENTATIVE':
                const salesRepresentative = require('../../dbms/models/salesRepresentative')

                salesRepresentative.create({
                    natID:id,zone,district,
                }).then((salesRepresentativeRow)=>{
                    res.status(200).send(salesRepresentativeRow)
                }).catch(error => res.status(200).send(error))
                break
            case 'STORES CLERK':
                const storesClerk = require('../../dbms/models/storesClerk')

                storesClerk.create({
                    natID:id,district,
                }).then((storesClerkRow)=>{
                    res.status(200).send(storesClerkRow)
                }).catch(error => res.status(200).send(error))
                break
            case 'SUPERVISOR':
                const supervisor = require('../../dbms/models/supervisor')

                supervisor.create({
                    natID:id,district,
                }).then((supervisorRow)=>{
                    res.status(200).send(supervisorRow)
                }).catch(error => res.status(200).send(error))
                break
            case 'ACCOUNTANT':
                const accountant = require('../../dbms/models/accountant')

                accountant.create({
                    natID:id,
                }).then((accountantRow)=>{
                    res.status(200).send(accountantRow)
                }).catch(error => res.status(200).send(error))
                break
            case 'SCHEME COORDINATOR':
                const schemeCoordinator = require('../../dbms/models/schemeCoordinator')

                schemeCoordinator.create({
                    natID:id,
                }).then((schemeCoordinatorRow)=>{
                    res.status(200).send(schemeCoordinatorRow)
                }).catch(error => res.status(200).send(error))
                break
            case 'ADMIN':
                const admin = require('../../dbms/models/admin')

                admin.create({
                    natID:id,
                }).then((adminRow)=>{
                    res.status(200).send(adminRow)
                }).catch(error => res.status(200).send(error))
                break
            default:
                res.status(200).send('Invalid')
        }
    }).catch(error => res.status(200).send(error))
})

module.exports = router