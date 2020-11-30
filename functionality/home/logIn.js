const express = require('express')
const lodash = require('lodash')
const user = require('../../dbms/models/user')
const customer = require('../../dbms/models/customer')
const hash = require('password-hash')

const router = express.Router({ mergeParams: true })

const jsonParser = express.json()

router.post('/', jsonParser, (req, res) => {
    console.log('Request to log in')

    let id = req.body.idNo
    let password = req.body.password
    let data = {
        accID: null,
        position: null,
        customerID: null,
        employeeID: null,
    }

    id = lodash.toUpper(id)
    user.findOne({
        where: {
            natID: id,
        },
        attributes: ['accID', 'role', 'account', 'password']
    }).then((row) => {
        if (row !== null) {
            if (hash.verify(password, row.password)) {
                if (row.account === 'Active') {

                    data.accID = row.accID

                    if (row.role !== 'Non-employee') {
                        switch (row.role) {
                            case 'Plumber':
                                const plumber = require('../../dbms/models/plumber')
                                plumber.findOne({
                                    where: {
                                        natID: id
                                    },
                                    attributes: ['employeeID', 'status']
                                }).then((employeeRow) => {
                                    if (employeeRow) {
                                        data.position = 0
                                        data.employeeID = employeeRow.employeeID
                                    }
                                })
                                break
                            case 'Sales Representative':
                                const salesRepresentative = require('../../dbms/models/salesRepresentative')
                                salesRepresentative.findOne({
                                    where: {
                                        natID: id
                                    },
                                    attributes: ['employeeID', 'status']
                                }).then((employeeRow) => {
                                    if (employeeRow) {
                                        data.position = 1
                                        data.employeeID = employeeRow.employeeID
                                    }
                                })
                                break
                            case 'Stores Clerk':
                                const storesClerk = require('../../dbms/models/storesClerk')
                                storesClerk.findOne({
                                    where: {
                                        natID: id
                                    },
                                    attributes: ['employeeID', 'status']
                                }).then((employeeRow) => {
                                    if (employeeRow) {
                                        data.position = 2
                                        data.employeeID = employeeRow.employeeID
                                    }
                                })
                                break
                            case 'Supervisor':
                                const supervisor = require('../../dbms/models/supervisor')
                                supervisor.findOne({
                                    where: {
                                        natID: id
                                    },
                                    attributes: ['employeeID', 'status']
                                }).then((employeeRow) => {
                                    if (employeeRow) {
                                        data.position = 3
                                        data.employeeID = employeeRow.employeeID
                                    }
                                })
                                break
                            case 'Scheme Coordinator':
                                const schemeCoordinator = require('../../dbms/models/schemeCoordinator')
                                schemeCoordinator.findOne({
                                    where: {
                                        natID: id
                                    },
                                    attributes: ['employeeID', 'status']
                                }).then((employeeRow) => {
                                    if (employeeRow) {
                                        data.position = 4
                                        data.employeeID = employeeRow.employeeID
                                    }
                                })
                                break
                            case 'Accountant':
                                const accountant = require('../../dbms/models/accountant')
                                accountant.findOne({
                                    where: {
                                        natID: id
                                    },
                                    attributes: ['employeeID', 'status']
                                }).then((employeeRow) => {
                                    if (employeeRow) {
                                        data.position = 5
                                        data.employeeID = employeeRow.employeeID
                                    }
                                })
                                break
                            case 'Admin':
                                const Admin = require('../../dbms/models/admin')
                                Admin.findOne({
                                    where: {
                                        natID: id
                                    },
                                    attributes: ['employeeID', 'status']
                                }).then((employeeRow) => {
                                    if (employeeRow) {
                                        data.position = 6
                                        data.employeeID = employeeRow.employeeID
                                    }
                                })
                                break
                            default:
                                res.status(200).send('Invalid role with account')
                        }
                    }

                    customer.findOne({
                        where: {
                            natID: id,
                            status: 'active'
                        },
                        attributes: ['customerID']
                    }).then((customerRow) => {
                        if (customerRow) {
                            data.customerID = customerRow.customerID
                        }
                        res.status(200).send(data)
                    }).catch((err) => {
                        res.status(200).send(err)
                    })
                } else res.status(200).send('Account Deactived')
            } else res.status(200).send('Password Error')
        } else res.status(200).send('User not found')
    }).catch((err) => {
        res.status(200).send(err)
    })
})

module.exports = router