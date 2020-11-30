const express = require('express')
const connections = require('../../functionality/customer/connections')
const disconnect = require('../../functionality/customer/disconnect')
const pay = require('../../functionality/customer/pay')
const transactions = require('../../functionality/customer/transactions')

const app = express()

app.use('/connection',connections)
app.use('/pay',pay)
app.use('/transactions',transactions)
app.use('/disconnect',disconnect)

module.exports = app