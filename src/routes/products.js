const {Router}=require('express')
const route=Router()
const multer=require('multer')
var upload = multer({ dest: 'uploads/' })
const fs=require('fs').promises
const{
    createNewProduct,
    showAllProducts,
    //showCartProducts,
    showProductByName
}=require('../controller/products')

route.post('/',upload.single('ProductPic'),async(req,res)=>{
        console.log('req.body',req.body)
        console.log('req.product.filename',req.ProductPic.filename)
        console.log('req.file',req.file)
        const  oldPath=__dirname+'/uploads'+req.file.filename
        const newPath=__dirname+'/images'+'ProductPic_'+req.body.prodName+'.'+req.file.mimetype.split('/').pop()

        await fs.rename(oldPath,newPath)

        const{prodName,manufacturer,price,description}=req.body
        const{picture}='/images'+'ProductPic_'+req.body.prodName+'.'+req.file.mimetype.split('/').pop()

        if((!prodName)||(!manufacturer)){
            res.status(400).send({
                error:"Need productName, manufacturer, price and description to create a product "
            })
        }
        const product=await createNewProduct(prodName,manufacturer,price,description,picture)
        try{res.status(200).send(product)}
        catch{(err)=>console.log(err)}
        
})

route.get('/',async(req,res)=>{
    const product=await showAllProducts()
    try{res.status(200).send(product)}
    catch{(err)=>console.log(err)}
})

route.get(':/id',async(req,res)=>{
    const product=await showCartProducts(req.params.id)
    try{res.status(200).send(product)}
    catch{(err=>console.log(err))}
})

route.get(':/name',async(req,res)=>{
    const product=await showProductByName(req.params.name)
    try{res.status(200).send(product)}
    catch{(err)=>console.log(err)}
})

module.exports={
    prodRoute:route
}