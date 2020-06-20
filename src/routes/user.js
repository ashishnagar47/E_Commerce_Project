const{Router}=require('express')
const route=Router()
const {User}=require('../db/model')

const {
    createUser,
    findUserById,
    findUserByName
}=require('../controller/user')

// route.post('/',async(req,res)=>{
//     const{username}=req.body

//     const user=await createUser(username)
//     try{res.status(200).send(user)}
//     catch{(err)=>console.log(err)}
// })

route.post('/signup', async (req, res) => {
    
    console.log(req.body)
    const user = await User.create({
    
      username: req.body.username,
      email: req.body.email,
      password: req.body.password, // NOTE: in production we save hash of password
    })
    try{
    res.status(201).send(`User ${user.id} created`)}
    catch{(err)=>console.log(err)}
  })

  route.post('/login', async (req, res) => {
    const user = await User.findOne({where: { email: req.body.email }})
    if (!user) {
      return res.status(404).render('login', { error: 'No such email found' })
    }
  
    if (user.password !== req.body.password) {
      return res.status(401).render('login', { error: 'Incorrect password' })
    }
    req.session.userId = user.id
     res.redirect('../../#')  
  })
  
  route.get('/logout', (req, res) => {
    req.session.userId = null
    res.redirect('/login')
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