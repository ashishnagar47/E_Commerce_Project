const express=require('express')
const session=require('express-session')

const {db}=require('./src/db/model')
const app=express()
const PORT=process.env.PORT || 4444

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: '24knb6k247b2k7b2k7bk247hb2kh7b2',
  }))

const {userRoute}=require('./src/routes/user')
const{prodRoute}=require('./src/routes/products')
const {cartRoute}=require('./src/routes/cart')
const {paymentRoute}=require('./src/routes/payment')


app.use('/components/Authentication',userRoute)
app.use('/imagesCart',express.static(__dirname+'/imagesCart'))
app.use('/api/cart',cartRoute)
app.use('/images',express.static(__dirname+'/images'))
app.use('/api/products',prodRoute)

//app.use('/api/payment',paymentRoute)

app.use('/',express.static(__dirname+'/src/public'))
 

db.sync()
    .then(()=>{
        app.listen(PORT,()=>{
            console.log(`server started on http://localhost:${PORT}`);
        })
    })
    .catch((err)=>{
        console.error(new Error('Could not start database'))
        console.error(err);
    })
