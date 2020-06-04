const {Router}=require('express')
const route=Router()

const{
    createNewProduct,
    showAllProducts,
    showCartProducts
}=require('../controller/products')

route.post('/',async(req,res)=>{
        const{userId,prodName,manufacturer,price,description}=req.body

        if(!prodName,!manufacturer){
            res.status(400).send({
                error:"Need productName and manufacturer"
            })
        const product=await createNewProduct(userId,prodName,manufacturer,price,description)
        try{res.status(200).send(product)}
        catch{(err)=>console.log(err)}
        }
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

module.exports={
    prodRoute:route
}