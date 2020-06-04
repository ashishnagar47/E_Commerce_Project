const {User,Products}=require('../db/model')

async function createNewProduct(userId,prodName,manufacturer,price){
    const product=await Products.create({
        userId,
        prodName,
        manufacturer,
        price,
        
    })
    return product
}

async function showAllProducts(){
    const product=await Products.findAll({
    
    })
    return product
}

async function showCartProducts(userId){
    const product=await Products.findAll({
        include:[{model:User,
        where:{id:userId}}]
    })
    return product
}

module.exports={
    createNewProduct,
    showAllProducts,
    showCartProducts
}

async function task(){
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

    const products=await showCartProducts('1')
    for(let p of products){
        //console.log(`${p.proName}`)
        console.log(`id:${p.id}\nNAme: ${p.prodName}\n Manuf.${p.manufacturer}:\n Price: ${p.price}\n `)
    }

}task()
.catch((err)=>{console.log(err)})
