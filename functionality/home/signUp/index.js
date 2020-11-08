const user = require('../../../orm/models/user')
const nationalID = require('../../../orm/models/nationalID')

const createFunc = (data)=>{
    const [natID,created] = await nationalID.findOrCreate({
        where:{id:data.idNo},
        defaults:{
            idExpiryDate:data.idEx,
            nationality:data.nationality,
            home:data.home,
        }
    });

    console.log('natID')

    if(created){
        await user.create({
            fname:data.firstname,
            lname:data.lastname,
            initial:data.initial,
            dob:data.dob,
            gender:data.gender,
            status:data.status,
            number:data.phone,
            email:data.email,
            district:data.district,
            area:data.area,
            natID:data.idNo,
            password:data.password1,
        });
    }        
    else{
        return 'Sorry, this national ID already exists'
    }
        
}

module.exports = createFunc