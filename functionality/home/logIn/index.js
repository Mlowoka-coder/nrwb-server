const user = require('../../../orm/models/user')
const meter = require('../../../orm/models/meter')

const fetch = ({id,password})=>{    
    let role = [null,null]

    const usr = await user.findOne({
        where:{
            natID:id,
            password:password,
            account:'Active'
        },
        attributes:['role']
    })

    if(usr !== null){
        role[1] = usr.role
        const customer = await .findOne({
            where:{
                owner:id
            },
        })

        if(customer !== null)
            role[0] = true
    }else return 'Sorry, error processing your account'
}

module.exports = fetch