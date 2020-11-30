const express = require('express')
const addEmployee = require('../../functionality/admin/addEmployee')
const changeUserStatus = require('../../functionality/admin/changeUserStatus')
const confirmCrime = require('../../functionality/admin/confirmCrime')
const crimes = require('../../functionality/admin/crimes')
const generateReport = require('../../functionality/admin/generateReport')
const users = require('../../functionality/admin/users')

const app = express()

app.use('admin/addEmployee',addEmployee)
app.use('admin/changeUserStatus',changeUserStatus)
app.use('admin/confirmCrime',confirmCrime)
app.use('admin/crimes',crimes)
app.use('admin/generateReport',generateReport)
app.use('admin/users',users)

module.exports = app