const express=require('express')
const session=require('express-session')

const {db}=require('./src/db/model')
const app=express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))
//app.set('view engine','hbs')

app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: '24knb6k247b2k7b2k7bk247hb2kh7b2',
  }))

const {userRoute}=require('./src/routes/user')
const{prodRoute}=require('./src/routes/products')
const {cartRoute}=require('./src/routes/cart')


app.use('/components/Authentication',userRoute)
app.use('/imagesCart',express.static(__dirname+'/imagesCart'))
app.use('/api/cart',cartRoute)
app.use('/images',express.static(__dirname+'/images'))
app.use('/api/products',prodRoute)

app.use('/',express.static(__dirname+'/src/public'))
 // app.get('/',(req,res)=>{
 //     res.render('index')
// })

db.sync({force:true})
    .then(()=>{
        app.listen(4444,()=>{
            console.log('server started on http://localhost:4444');
        })
    })
    .catch((err)=>{
        console.error(new Error('Could not start database'))
        console.error(err);
    })
