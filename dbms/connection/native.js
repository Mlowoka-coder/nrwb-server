const sqlite = require('sqlite3').verbose()

let db = new sqlite.Database('dbms/database/nrwb.sqlite',(err)=>{
    if(err)
        return console.log('Error in prossessing', err.message)

    console.log('Database Connected Successfully')
})

module.exports = db