const db = require('../../connection/native')
const logIn = require('./logIn')

const addUser = ({fname,lname,initial,dob,gender,status,number,email,district,area,natID,idExpiryDate,nationality,home,password})=>{
    db.serialize(()=>{
        db.get(`SELECT id FROM nationalID WHERE nationalID = ${natID}`,(err,row)=>{           
            if(err){
                db.close()
                throw {name:'error_querying', message:err.message} 
            }                
            else if(row){
                db.close()
                throw {name:'id_exits', message:'User already exists with this ID'}
            }                
        })
        .run(`INSERT INTO nationalID(id,idExpiryDate,nationality,home) VALUES(${natID},${idExpiryDate},${nationality},${home})`)
        .run(`INSERT INTO user(fname,lname,initial,dob,gender,status,number,email,district,area,home,password) VALUES(${fname},${lname},${initial},${dob},${gender},${status},${number},${email},${district},${area},${home},${password})`)
    })
    db.close()

    return logIn({id:natID,password}) 
}

module.exports = addUser