const express=require('express')

const {db}=require('./src/db/model')
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const {userRoute}=require('./src/routes/user')
const{prodRoute}=require('./src/routes/products')

app.use('/api/users',userRoute)
app.use('/api/products',prodRoute)
app.use('/',express.static(__dirname+'/src/public'))


db.sync()
    .then(()=>{
        app.listen(4444,()=>{
            console.log('server started on http://localhost:4444');
        })
    })
    .catch((err)=>{
        console.error(new Error('Could not start database'))
        console.error(err);
    })
