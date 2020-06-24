const{CartProducts,User}=require('../db/model')

async function addNewProduct(userId,cProdName,manufacturer,shopName,price,picture){
    const cart=await CartProducts.create({
        userId,
        cProdName,
        manufacturer,
        shopName,
        price,
        picture
        
    })
    return cart
}

async function showAllProducts(id){
    console.log(id)
    const cart=await CartProducts.findAll({
        include:{model:User,
        where:{id:id}
    }}).catch((err)=>{
        console.log("CartProduct"+ err)
    })
    return cart
}

// async function showCartProducts(id){
//     const cart=await CartProducts.findAll({
//         include:{model:User},
//         where:{id:id}})
//     return cart
// }

async function deleteCartProduct(id){
    const cart=await deleteCartProduct.destroy({
        include:{model:User},
        where:{id:id}
    })
    return cart
}




module.exports={
    addNewProduct,
    showAllProducts,
    deleteCartProduct
}



// async function task(){
//     await addNewProduct(
        
//         'Iphone',
//         "Apple",
//         "ladj",
//         '100000'
        
//     )

//     await addNewProduct(
        
//         'Pixel',
//         'Google',
//         'jdsfj',
//         '60000',
        
//     )

//     const products=await showAllProducts('Apple')
//     for(let p of products){
//         //console.log(`${p.proName}`)
//         console.log(`id:${p.id}\nNAme: ${p.prodName}\n Manuf.${p.manufacturer}:\n Price: ${p.price}\n `)
//     }

// }task()
// .catch((err)=>{console.log(err)})
