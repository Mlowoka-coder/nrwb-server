const express = require('express')
const apply = require('../../functionality/user/apply')
const applications = require('../../functionality/user/applications')
const report = require('../../functionality/user/report')
const reports = require('../../functionality/user/reports')
const notifications = require('../../functionality/user/notifications')

const app = express()

app.use('/apply',apply)
app.use('/applications',applications)
app.use('/report',report)
app.use('/reports',reports)
app.use('/notifications',notifications)

module.exports = app