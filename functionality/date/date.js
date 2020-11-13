const dateFunc = (milliseconds)=>{
    const date = new Date(milliseconds)

    const allocatedDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`

    return allocatedDate
}

module.exports = dateFunc
