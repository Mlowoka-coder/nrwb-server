const express = require('express')
const readings = require('../../functionality/salesRepresentative/readings')
const confirmCrime = require('../../functionality/salesRepresentative/confirmCrime')
const crimes = require('../../functionality/salesRepresentative/crimes')
const enterReadings = require('../../functionality/salesRepresentative/enterReadings')

const app = express()

app.use('/readings',readings)
app.use('/confirmCrimes',confirmCrime)
app.use('/crimes',crimes)
app.use('enterReadings',enterReadings)

module.exports = app