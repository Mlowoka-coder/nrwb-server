const express = require('express')
const approveTariffChange = require('../../functionality/accountant/approveTariffChange')
const aproveFinanceRequest = require('../../functionality/accountant/aproveFinanceRequest')
const billingRequest = require('../../functionality/accountant/billingRequest')
const financeRequests = require('../../functionality/accountant/financeRequests')
const startBilling = require('../../functionality/accountant/startBilling')
const tariff = require('../../functionality/accountant/tariff')

const app = express()

app.use('accountant/approveTariffChange',approveTariffChange)
app.use('accountant/aproveFinanceRequest',aproveFinanceRequest)
app.use('accountant/billingRequest',billingRequest)
app.use('accountant/financeRequests',financeRequests)
app.use('accountant/startBilling',startBilling)
app.use('accountant/tariff',tariff)

module.exports = app