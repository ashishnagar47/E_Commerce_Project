function loadProducts(){
    $.get('/api/products',(products)=>{
        for(let p of products){
            $('#product-container').append(
                $(`
                    <div class="card  m-4" style="max-width: 2460px;">
                    <div class="row no-gutters">
                    
                        <img src="${p.picture}" class="card-img" id="picture" style="height:20rem; width:10rem" alt="...">
                    
                
                        <div class="card-body">
                            <h5 class="card-title text-center" id="productName">${p.prodName}</h5>
                            <br>
                            <h5 class="card-title" id="Manufacturer">Manufacturer: ${p.manufacturer}</h5>
                            
                            <h5 class="card-title" id="Seller">Seller: ${p.shopName}</h5>
                            
                            <h5 class="card-title" id="Price">Rs: ${p.price }</h5>
                            
                            <p class="card-text" id="Description"></p>
                            <br>
                            <a href="components/addCartProducts.html?prodName=${p.prodName}&manufacturer=${p.manufacturer}&shopName=${p.shopName}&price=${p.price}" class="btn btn-primary mb-2"  style="width:200px" id="shoppingCart"  >Add to Cart</a>
                            <br>
                            <a href="#" class="btn btn-secondary col-mx-8" style="width:200px">Buy Now</a>
                            <!--<p class="card-text mx-6"><small class="text-muted">Last updated 3 mins ago</small></p>-->
                        </div>
                        </div>
                        
                    </div>
                    </div>
                 `)
             )
             
        } 
        // $("#shoppingCart").click(function(){
        //     const cProdName=p.prodName
        //     const manufacturer=p.manufacturer
        //     const price=p.price
        //     const shopName=p.shopName
        //     const picture=p.picture
        //     console.log(cProdName)
        //     $.post('/api/cart',
        //             {cProdName,manufacturer,shopName,price,picture}
        //     )
        //  })
        
    })
    
}

