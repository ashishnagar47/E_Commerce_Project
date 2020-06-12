const { Op } = require("sequelize");

const {Products}=require('../db/model')
const{CartProducts}=require('../db/model')

async function createNewProduct(prodName,manufacturer,price,description,picture){
    const product=await Products.create({
        prodName,
        manufacturer,
        price,
        description,
        picture
    })
    return product
}

async function showAllProducts(){
    const product=await Products.findAll({
    
    })
    return product
}

// async function addCartProducts(productId){
//     const product=await Products.findAll({
//         where:{id:productId}})
//     return product
// }

async function showProductByName(name){
    const product=await Products.findAll({
        where:{[Op.or]:[
            {prodName:name},
        {manufacturer:name}]
        }
    })
    return product
}

// async function showProductByName(prodName){
//     const product=await Products.findAll({
//         where:{prodName}
//     })
//     product
// }


module.exports={
    createNewProduct,
    showAllProducts,
   // showCartProducts,
    showProductByName
}

//async function task(){
    // await createNewProduct(
    //     '1',
    //     'Iphone',
    //     "Apple",
        
    //     '100000',
    //     'New Iphone Launched with new Features'
    // )

    // await createNewProduct(
    //     '2',
    //     'Pixel',
    //     'Google',
    //     '60000',
    //     'Much better then iphone'
    // )

//     const products=await showCartProducts('2')
//     for(let p of products){
//         //console.log(`${p.proName}`)
//         console.log(`id:${p.id}\nNAme: ${p.prodName}\n Manuf.${p.manufacturer}:\n Price: ${p.price}\n `)
//     }

// }task()
// .catch((err)=>{console.log(err)})
