const db = require('../../connection/native')

const logIn = ({id,password})=>{
    let data = {
        accID: null,
        position: null,
        employeeID: null,
        customerID: null,
    }
    let employee
    db.serialize(()=>{
        db.get(`SELECT accID, role, account FROM user WHERE natID = ${id} AND password = ${password}`,(err,row)=>{
            data.accID = row.accID
            if(err){
                db.close()
                throw {name:'error_querying', message:err.message}
            }                
            else if(row){
                if(row.account === 'Deactive'){
                    db.close()
                    throw {name:'deactive_user',message:'Sorry, account has been deactivated'}
                }                    
                else if(role !== 'Non-employee')
                    data.position = row.role
            }
        })
        .run(`SELECT customerID FROM customer WHERE natID = ${id}`,(err,row)=>{
            if(err){
                db.close()
                throw {name:'error_querying', message:err.message}
            }
            else if(row){
                data.customerID = row.customerID
                if(!data.position) {
                    db.close()
                    return data
                }
            }                
        })
        .run(`SELECT employeeID FROM ${employee} WHERE natID = ${id}`,(err,row)=>{
            if(err)
                throw {name:'error_querying', message:err.message}
            else if(row){
                data.employeeID = row.employeeID
                db.close()
                return data
            }                
        })
    })
}

module.exports = logIn