const signUpQuery = require('../../dbms/queries/home/signUp')
const lodash = require('lodash')
const hash = require('password-hash')

const signUp = (fname,lname,initial,dob,gender,status,number,email,district,area,natID,idExpiryDate,nationality,home,password) =>{
    fname = lodash.upperFirst(lodash.toLower(fname))
    lname = lodash.upperFirst(lodash.toLower(lname))
    initial = lodash.upperFirst(lodash.toLower(initial))
    gender = lodash.upperFirst(lodash.toLower(gender))
    status = lodash.upperFirst(lodash.toLower(status))
    district = lodash.upperFirst(lodash.toLower(district))
    area = lodash.upperFirst(lodash.toLower(area))
    natID = lodash.toUpper(lodash.toLower(natID))
    nationality = lodash.upperFirst(nationality)
    home = lodash.upperFirst(lodash.toLower(home))
    password = hash.generate(password)

    return signUpQuery({fname,lname,initial,dob,gender,status,number,email,district,area,natID,idExpiryDate,nationality,home,password})
}

module.exports = signUp