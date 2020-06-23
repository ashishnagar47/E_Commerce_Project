const { Op } = require("sequelize");

const {Products}=require('../db/model')
const{CartProducts}=require('../db/model')

async function createNewProduct(prodName,manufacturer,shopName,category,price,description,picture){
    const product=await Products.create({
        prodName,
        manufacturer,
        shopName,
        category,
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

async function showProductById(productId){
    const product=await Products.findAll({
        where:{id:productId}})
    return product
}

async function showProductByName(name){
    const product=await Products.findAll({
        where:{[Op.or]:[
            {prodName:name},
        {manufacturer:name},
        {category:name}]
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
   showProductById,
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

//     const products=await showProductByName('Apple')
//     for(let p of products){
//         //console.log(`${p.proName}`)
//         console.log(`id:${p.id}\nNAme: ${p.prodName}\n Manuf.${p.manufacturer}:\n Price: ${p.price}\n `)
//     }

// }task()
// .catch((err)=>{console.log(err)})
