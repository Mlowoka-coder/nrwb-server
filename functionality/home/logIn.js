const logInQuery = require('../../dbms/queries/home/logIn')
const lodash = require('lodash')
const hash = require('password-hash')

const logIn = (id,password)=>{
    id = lodash.toUpper(id)
    password = hash.generate(password)
    return logInQuery({id, password})
}

module.exports = logIn