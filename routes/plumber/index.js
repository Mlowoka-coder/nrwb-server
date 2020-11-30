const express = require('express')
const application = require('../../functionality/plumber/application')
const measurement = require('../../functionality/plumber/measurement')
const crimes = require('../../functionality/plumber/crimes')
const addCrime = require('../../functionality/plumber/addcrimes')
const tasks = require('../../functionality/plumber/tasks')
const reportTask = require('../../functionality/plumber/reportTask=')

const app = express()

app.use('/applications',application)
app.use('/measurement',measurement)
app.use('/crimes',crimes)
app.use('/addCrime',addCrime)
app.use('/tasks',tasks)
app.use('/reportTask',reportTask)

module.exports = app