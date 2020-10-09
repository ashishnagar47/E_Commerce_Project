const{Router}=require('express')
const route=Router()
const {User}=require('../db/model')

const {
    createUser,
    findAllUser,
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
    var{username,email,password,password2}=req.body
    
    console.log(req.body)
    const user = await User.create({
    
      username: req.body.username,
      email: req.body.email,
      password: req.body.password, 
    })
    try{
      res.redirect(`/components/Authentication/login.html`)}
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
     res.redirect(`/components/Authentication/profile.html?user=${user.username}`)  
  })
  
  route.get('/logout', (req, res) => {
    req.session.userId = null
    res.redirect('../../components/Authentication/login.html')
  })

  
  route.get('../../components/Authentication/profile', async (req, res) => {
    if (!req.session.userId) {
      return res.redirect('/login.html')
    }
    const user = await User.findByPk(req.session.userId)
    console.log(user.id+"bkdskjbjdb")
    return user;
    //res.render('../public/components/Authentication/profile.html', $(`user`))
  })
  
module.exports={
    userRoute:route
}