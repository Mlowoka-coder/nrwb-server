const express = require('express')
const faultReport = require('../../dbms/models/faultReport')

const router = express.Router({mergeParams:true})
const jsonParser = express.json()

router.get('/',jsonParser,(req,res)=>{
    faultReport.findAll({
        where:{
            reporterID
        }
    }).then((faultReportRows)=>{
        res.status(200).send(faultReportRows)
    }).catch(error => res.status(200).send(error))
})

module.exports = router