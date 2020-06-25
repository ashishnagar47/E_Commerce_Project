function loadProducts(){
    $.get('/api/products',(products)=>{
        for(let p of products){
            $('#product-container').append(
                $(`


                <div class="card m-4 " style="min-width:300px">
                    <div class="row no-gutters">
                    
                        <img src="${p.picture}" class="card-img rounded mx-auto d-block" id="picture" style="max-height:300px; max-width:200px"   alt="...">
                    
                    </div
                        <div class="card-body rounded mx-auto d-block">
                            <h5 class="card-title text-center" id="productName">${p.prodName}</h5>
                            <br>
                    
                            
                            <h5 class="card-title" id="Seller">Seller: ${p.shopName}</h5>
                            
                            <h5 class="card-title" id="Price">₹ ${p.price }</h5>
                            
                
                            <br>
                            <a href="#" class="btn btn-primary mb-2"  style="width:150px" onclick="addProduct(this)" id="${p.id}" data-comp="${p.id}"   >Add to Cart</a>
                            
                            <a href="#" class="btn btn-secondary col-mx-8" style="width:150px">Buy Now</a>
                            
                        </div>
                        </div>
                        
                    </div>
                    
               
                 `)
             )
             
             
        }

        
    })
}

function addProduct(prod){
    const p=prod.getAttribute("data-comp")
    $.get(`/api/products/${p}`,(product)=>{
        const cProdName=product[0].prodName
        const manufacturer=product[0].manufacturer
        const shopName=product[0].shopName
        const price=product[0].price
        const picture=product[0].picture
        console.log(cProdName)

        $.post('api/cart',{
            cProdName,manufacturer,shopName,price,picture
        })

    })
}

{/* <div class="card m-4" style="min-width:400px" >
                    <img src="${p.picture}" class="card-img-top rounded mx-auto d-block" style="max-height:300px; max-width:200px" alt="...">
                    <div class="card-body">
                    <h5 class="card-title"> ${p.prodName}</h5>
                    <h5 class="card-text">₹ ${p.price}</p>
                
                    </div>
                </div>
    
    
    <div class="card m-2 ">
                    <div class="row no-gutters">
                    
                        <img src="${p.picture}" class="card-img" id="picture" style=" width:9rem" alt="...">
                    
                
                        <div class="card-body">
                            <h5 class="card-title text-center" id="productName">${p.prodName}</h5>
                            <br>
                    
                            
                            <h5 class="card-title" id="Seller">Seller: ${p.shopName}</h5>
                            
                            <h5 class="card-title" id="Price">Rs: ${p.price }</h5>
                            
                
                            <br>
                            <a href="#" class="btn btn-primary mb-2"  style="width:150px" onclick="addProduct(this)" id="${p.id}" data-comp="${p.id}"   >Add to Cart</a>
                            <br>
                            <a href="#" class="btn btn-secondary col-mx-8" style="width:150px">Buy Now</a>
                            <!--<p class="card-text mx-6"><small class="text-muted">Last updated 3 mins ago</small></p>-->
                        </div>
                        </div>
                        
                    </div>
                    </div>
     */}