const {Router}=require('express')
const route=Router()
const {Products}=require('../db/model')
const multer=require('multer')
var upload = multer({ dest: 'uploads/' })
const path=require('path')
var appDir=path.dirname(require.main.filename)
const fs=require('fs').promises
const{
    createNewProduct,
    showAllProducts,
    showProductByName,
    showProductById,
    showSelectedProduct
}=require('../controller/products')

route.post('/',upload.single('picture'),async(req,res)=>{
        console.log('req.body',req.body)
       // console.log('req.product.filename',req.ProductPic.filename)
        console.log('req.file',req.file)

        const  oldPath=path.join(appDir,'/uploads',req.file.filename)
        const newPath= path.join(appDir,'/images','ProductPic_'+req.body.prodName+'.'+req.file.mimetype.split('/').pop())
        
        console.log(oldPath)
        console.log("=======================")
        console.log(newPath)
        await fs.rename(oldPath,newPath)

        const{prodName,manufacturer,shopName,category,price,description}=req.body
        const picture='/images/'+'ProductPic_'+req.body.prodName+'.'+req.file.mimetype.split('/').pop()
       // const picture=newPath
        if((!prodName)||(!manufacturer)){
            res.status(400).send({
                error:"Need productName, manufacturer to create a product "
            })
        }
        const product=await createNewProduct(prodName,manufacturer,shopName,category,price,description,picture)
        try{res.status(200).send(product)}
        catch{(err)=>console.log(err)}
        
})

route.get('/',async(req,res)=>{
    const product=await showAllProducts()
    try{res.status(200).send(product)}
    catch{(err)=>console.log(err)}
})


route.get('/:id',async(req,res)=>{
    const product=await showProductById(req.params.id)
    try{res.status(200).send(product)}
    catch{(err=>console.log(err))}
})

route.get('/find/Electronics',async(req,res)=>{
    const product=await showSelectedProduct('Electronics')
    try{res.status(200).send(product)}
    catch{(err=>console.log(err))}
})

route.get('/find/TV&Appliances',async(req,res)=>{
    const product=await showSelectedProduct('TV&Appliances')
    try{res.status(200).send(product)}
    catch{(err=>console.log(err))}
})

route.get('/find/Home&Furniture',async(req,res)=>{
    const product=await showSelectedProduct('Home&Furniture')
    try{res.status(200).send(product)}
    catch{(err=>console.log(err))}
})

route.get('/find/Sports,Books&More',async(req,res)=>{
    const product=await showSelectedProduct('Sports,Books&More')
    try{res.status(200).send(product)}
    catch{(err=>console.log(err))}
})

route.get('/find/Kids',async(req,res)=>{
    const product=await showSelectedProduct('Kids')
    try{res.status(200).send(product)}
    catch{(err=>console.log(err))}
})

route.get('/find/Grocery',async(req,res)=>{
    const product=await showSelectedProduct('Grocery')
    try{res.status(200).send(product)}
    catch{(err=>console.log(err))}
})


route.get('/name/:name',async(req,res)=>{
    const product=await showProductByName(req.params.name)
    try{res.status(200).send(product)}
    catch{(err)=>console.log(err)}
})


route.delete('/:id',async(req,res)=>{
    let id=req.params.id;
    Products.findByPk(id)
    .then((product)=>{
        return product.destroy();
    })

    //const cart=await deleteCartProduct(id)

    try{res.status(200).send(cart)}
    catch{(err=>console.log(err))}
})

module.exports={
    prodRoute:route
}