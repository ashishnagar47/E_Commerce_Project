const{Router}=require('express')
const route=Router()

const {
    createUser,
    findUserById,
    findUserByName
}=require('../controller/user')

route.post('/',async(req,res)=>{
    const{username}=req.body

    const user=await createUser(username)
    try{res.status(200).send(user)}
    catch{(err)=>console.log(err)}
})

route.get(':/id',async(req,res)=>{
    const user=findUserById(req.params.id)
    try{res.status(200).send(user)}
    catch{(err)=>console.log(err)}
})

route.get(':/username',async(req,res)=>{
    const user=findUserByName(req.params.username)
    try{res.status(200).send(user)}
    catch{(err)=>console.log(err)}
})

module.exports={
    userRoute:route
}