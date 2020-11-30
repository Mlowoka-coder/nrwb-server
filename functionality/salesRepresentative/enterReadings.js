const express = require('express')
const reading = require('../../dbms/models/reading')
const meter = require('../../dbms/models/meter')

const router = express.Router({mergeParams:true})
const jsonParser = express.json()

router.post('/',jsonParser,(req,res)=>{
    reading.create({
        salesRepresentativeID,
        meterID,
        lastReading,
        newReading,
        zone
    }).then((readingRow)=>{
        const date = new Date()
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const lastReadMonth = months[date.getMonth()]

        meter.update({lastReadMonth,lastReading},{where:{
            id:meterID
        }}).then((result)=>{
            res.status(200).send(result)
        }).catch(error => res.status(200).send(error))
    }).catch(error => res.status(200).send(error))
})

module.exports = router