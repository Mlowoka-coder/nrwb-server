const express = require('express')
const updateTariff = require('../../functionality/schemeCoordinator/updateTariff')
const tariffs = require('../../functionality/schemeCoordinator/tariffs')
const applications = require('../../functionality/schemeCoordinator/applications')
const quotation = require('../../functionality/schemeCoordinator/quotation')
const billing = require('../../functionality/schemeCoordinator/billing')
const confirmBilling = require('../../functionality/schemeCoordinator/confirmBilling')
const addCrime = require('../../functionality/schemeCoordinator/addCrime')
const crimes = require('../../functionality/schemeCoordinator/crimes')

const app = express()

app.use('/updateTariff',updateTariff)
app.use('/tariffs',tariffs)
app.use('/applications',applications)
app.use('/quotation',quotation)
app.use('/billing',billing)
app.use('/confirmBilling',confirmBilling)
app.use('/addCrime',addCrime)
app.use('/crimes',crimes)

module.exports = app