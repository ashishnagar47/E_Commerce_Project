const {Router}=require('express')
const route=Router()
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
       // console.log('req.product.filename',req.ProductPic.filename)
        //console.log('req.file',req.file)

        // const  oldPath=path.join(appDir,'/uploadCart',req.file.filename)
        // const newPath= path.join(appDir,'/imagesCart','cartProductPic_'+req.body.cProdName+'.'+req.file.mimetype.split('/').pop())
        
        // console.log(oldPath)
        // console.log("=======================")
        // console.log(newPath)
        // await fs.rename(oldPath,newPath)

        const{cProdName,manufacturer,price,description}=req.body
        
        //const picture='/images/'+'ProductPic_'+req.body.cProdName+'.'+req.file.mimetype.split('/').pop()
       // const picture=newPath
        if((!cProdName)||(!manufacturer)){
            res.status(400).send({
                error:"Need productName, manufacturer to create a product "
            })
        }
        const product=await addNewProduct(cProdName,manufacturer,price,description)
        try{res.status(200).send(product)}
        catch{(err)=>console.log(err)}
        
})

route.get('/',async(req,res)=>{
    const product=await showAllProducts()
    try{res.status(200).send(product)}
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