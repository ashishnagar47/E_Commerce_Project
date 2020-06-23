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
     res.redirect(`/components/Authentication/profile.html?user=${user.username}`)  
  })
  
  route.get('/logout', (req, res) => {
    req.session.userId = null
    res.redirect('../../components/Authentication/login.html')
  })

  

  // route.get('/', function(req, res) {
  //   var old = req.session.name;
  //   req.session.name = req.param('name');
  //   var name = req.param('name');
  //   var n=req.session.name 
  
  //  // res.header('Content-Type', 'text/plain');
  //   res.send("Email was '" + old + n+"', now is '" + req.session.username + name+ "'." +req.session.userId);
  // });

  route.get('../../components/Authentication/profile', async (req, res) => {
    if (!req.session.userId) {
      return res.redirect('/login.html')
    }
    const user = await User.findByPk(req.session.userId)
    console.log(user.id+"bkdskjbjdb")
    return user;
    //res.render('../public/components/Authentication/profile.html', $(`user`))
  })
  

// route.get('/',async(req,res)=>{
//   const user=req.session.user
//     try{res.status(200).send(user)}
//     catch{(err)=>console.log(err)}
    
// })

// route.get('/:id',async(req,res)=>{
//     const user=User.findOne({where:{id:req.params.id}})
//     try{res.status(200).send(user)}
//     catch{(err)=>console.log(err)}
// })

// route.get('/:username',async(req,res)=>{
//     const user=findUserByName(req.params.username)
//     try{res.status(200).send(user)}
//     catch{(err)=>console.log(err)}
// })

module.exports={
    userRoute:route
}