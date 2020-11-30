const express = require('express')
const addItem = require('../../functionality/storesClerk/addItem')
const viewStores = require('../../functionality/storesClerk/viewStores')
const financeRequests = require('../../functionality/storesClerk/financeRequests')
const toolsRequests = require('../../functionality/storesClerk/toolsRequests')
const requestFinance = require('../../functionality/storesClerk/requestFinance')
const grantTools = require('../../functionality/storesClerk/grantTools')

const app = express()

app.use('/addItem',addItem)
app.use('/viewStores',viewStores)
app.use('/financeRequests',financeRequests)
app.use('/toolsRequests',toolsRequests)
app.use('/requestFinace',requestFinance)
app.use('/grantTools',grantTools)

module.exports = app