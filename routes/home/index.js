const express = require('express');
const logIn = require('../../functionality/home/logIn')
const signUp = require('../../functionality/home/signUp')

const app = express()

app.use('/logIn',logIn)
app.use('/signUp',signUp)

module.exports = app