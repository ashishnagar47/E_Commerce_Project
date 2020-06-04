const Sequelize=require ('sequelize')

const db=new Sequelize({
    dialect:'mysql',
    database:'eCommerceSite',
    username:'eCommerceProjectUser',
    password:'eCommerceProjectPass'
})

const COL_ID_DEF={
    type:Sequelize.DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
}

const COL_NAME_DEF={
    type:Sequelize.DataTypes.STRING(30),
    //allowNull:false,
    
}
const MANUF={
    type:Sequelize.DataTypes.STRING(30),
    
    
}

const User=db.define('user',{
    id:COL_ID_DEF,
    username:COL_NAME_DEF
})

const Products=db.define('product',{
    id:COL_ID_DEF,
    prodName:COL_NAME_DEF,
    manufacturer:MANUF,
    price:{type:Sequelize.DataTypes.FLOAT},
    description:{type:Sequelize.DataTypes.TEXT}
    })

User.hasMany(Products)
Products.belongsTo(User)

// db.sync()
//     .then(()=>{console.log('database has been synced')})
//     .catch((err)=>{console.log('err')})

module.exports={
   db, User,Products
}