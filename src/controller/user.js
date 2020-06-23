const {User}=require('../db/model')

async function createUser(username){
    const user=await User.create({
        username,email,password
    })
    return user
}

async function findAllUser(){
    const user=await User.findAll()
    return user
}

async function findUserById(id){
    const user=await User.findOne({where:{id}})
    return user
}

async function findUserByName(userName){
    return await User.findOne({where:{username:userName}})
    //return usr
}

module.exports={
    createUser,
    findUserById,
    findUserByName,
    findAllUser,
}

// async function task(){
//     await createUser(
        
//         'Nancy'
//     )
    
//     await createUser(

//         'Janeyyyyyy'
//     )
//     console.log( await findUserById('2'))
//     console.log( await findUserByName('Janeyyyyyy'))
//     }task()
//     .catch((err)=>{
//         console.log(err)
//     })