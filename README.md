# E_Commerce_Project

## Database Setup

```shell
$mysql -u root
```

```mysql
create database eCommerceSite;

create  user eCommerceProjectUser identified with mysql_native_password by 'eCommerceProjectPass';

grant all privileges on eCommerceSite.* to eCommerceProjectUser;

flush privileges;
```

## Project Structure
### Backend(server)
```shell
src
├───controller                   #functions to connect route to db operations
├───db                           #db connection and model definition
├───public                       #front end of the static site      
└───routes                       #express middlewares route wise
```

### Frontend(client side code)
```shell
src\public
├───app                         #css and js codeed files for frontend
└───components                  #html coded files for frontend 
    └───Authentication          #html coded files for User Authentication
```

## Bussiness Logic

### Users
1. **Create Users**
    this will create users require fields are
    -username
    -email
    -password

2. **Find User**
    this will find a user using userId

### Products
1. **Create Products**
    this will craete a products require fields are
    -productName
    -manufacturer
    -shopName
    -price
    -category
    -description
    -image

2. **Show all Products**
    lists all existing products, we have following filtering support
    -filter by productId
    -filter by productName

### Carts
1. **Create CartProducts**
    this create cartproducts by clicking on the products and its require fields are
    -cartProdName
    -manufacturer
    -shopNAme
    -price
    -image

2. **Show All CartProducts**
    lists all cartProducts, and also filter by cartProductId

3. **Delete CartProducts**
    this will delete cartProducts using their cartId

## API Documentation

## `Users`
1. `POST\signup`
    Creates a new user with userId, username, email, password

2. `POST\login`
    Require email and password for authentication

3. `GET\profile`
    Redirects users to the site after authentication

4. `GET\logout`
    Logout user from the site using userId

## `Products`

1. `POST\products`
    Creates a new product 

2. `GET\products`
    Get all products on the site

3. `GET\products\{productId}`
    Get a product with the given productId

4.  `GET\products\{productName}`
     Get a product with the given productNAme

## `CartProducts`

1. `POST\cart`
    Creates a new CartProduct

2. `Get\cart`
    Get all the CartProducts of the user

3. `DELETE\cart\{cartProductId}`
    Delete a cartProduct with a given cartProductId
