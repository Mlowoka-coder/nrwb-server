const date = require('./date')

const dateIncrement = (days)=>{
    const dayMilliseconds = 86400000 * days
    const hourMilliseconds = 7200000

    const increment = dayMilliseconds + hourMilliseconds

    const milliseconds = Date.now()

    const newDate = milliseconds + increment

    const allocatedDate = date(newDate)

    return allocatedDate
}

module.exports = dateIncrement