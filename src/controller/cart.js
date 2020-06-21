const{CartProducts,User}=require('../db/model')

async function addNewProduct(cProdName,manufacturer,shopName,price){
    const cart=await CartProducts.create({
        cProdName,
        manufacturer,
        shopName,
        price
        
    })
    return cart
}

async function showAllProducts(){
    const cart=await CartProducts.findAll({
    })
    return cart
}

async function showCartProducts(productId){
    const cart=await CartProducts.findAll({
        where:{id:productId}})
    return cart
}

// async function showProductByName(name){
//     const product=await Products.findAll({
//         where:{[Op.or]:[
//             {prodName:name},
//         {manufacturer:name}]
//         }
//     })
//     return product
// }

// async function showProductByName(prodName){
//     const product=await Products.findAll({
//         where:{prodName}
//     })
//     product
// }


module.exports={
    addNewProduct,
    showAllProducts,
    showCartProducts
}
