const {Router}=require('express')
const route=Router()
const{CartProducts,User}=require('../db/model')
// const multer=require('multer')
// var upload = multer({ dest: 'uploadCart/' })
// const path=require('path')
// var appDir=path.dirname(require.main.filename)
// const fs=require('fs').promises
const{
    addNewProduct,
    showAllProducts
}=require('../controller/cart')

route.post('/',async(req,res)=>{
        console.log('req.body',req.body)
        const userId=req.session.userId
        const{cProdName,manufacturer,shopName,price,picture}=req.body
        if((!cProdName)||(!manufacturer)){
            res.status(400).send({
                error:"Need productName, manufacturer to create a product "
            })
        }
        
        const product=await addNewProduct(userId,cProdName,manufacturer,shopName,price,picture)
        console.log(product[0])
        try{res.redirect('/components/shoppingCart.html')}
        catch{(err)=>console.log(err)}
        
})

route.get('/',async(req,res)=>{
    const cart=await showAllProducts(req.session.userId)
    //const product=await showAllProducts(req.session.userId)
    // console.log(req.session.userId)
    // const user=req.session.userId;
    //     const cart=await CartProducts.findAll({
    //         include:{model:User,
    //         where:{id:user}
    //     }}).catch((err)=>{
    //         console.log("CartProduct"+ err)
    //     })
    //     console.log(cart)
    try{res.status(200).send(cart)}
    catch{(err)=>console.log(err)}
})


route.delete(':/id',async(req,res)=>{
    const product=await showCartProducts(req.params.id)
    try{res.status(200).send(product)}
    catch{(err=>console.log(err))}
})


module.exports={
    cartRoute:route
}