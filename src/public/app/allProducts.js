function loadProducts(){
    $.get('/api/products',(products)=>{
        for(let p of products){
            $('#product-container').append(
                $(`


                <div class="card m-4 " style="min-width:200px">
                    <div class="row no-gutters">
                    
                        <img src="${p.picture}" class="card-img rounded mx-auto d-block" id="picture" style="max-height:300px; max-width:200px"   alt="...">
                    
                    
                        <div class="card-body rounded mx-auto d-block">
                            <h5 class="card-title text-center" id="productName">${p.prodName}</h5>
                            <br>
                    
                            
                            <h5 class="card-title" id="Seller">Seller: ${p.shopName}</h5>
                            
                            <h5 class="card-title" id="Price">₹ ${p.price }</h5>
                            
                
                            <br>
                            
                            <a href="#" class="btn btn-primary mx-4 mb-2 justify-content-center"  style="width:150px" onclick="addProduct(this)" id="${p.id}" data-comp="${p.id}"   >Add to Cart</a>
                            <br>
                            <a href="#" class="btn btn-secondary mx-4 mb-2 justify-content-center"  style="width:150px">Buy Now</a>
                            <br>
                            <!-- <a href="#" class="btn btn-secondary mx-4 mb-2" onclick="deleteProduct(this)" data-component="${p.id}" style="width:150px">Remove</a> -->
                            
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

     function deleteProduct(prod){

        const p=prod.getAttribute("data-component")
    
        $.ajax({
            url: `/api/products/${p}`,
            type: 'DELETE',
            success: function(result) {
                console.log(result)
                // Do something with the result
            }
        });
        location.reload()
    }
    