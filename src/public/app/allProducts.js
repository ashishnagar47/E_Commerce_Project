function loadProducts(){
    $.get('/api/products',(products)=>{
        for(let p of products){
            $('#product-container').append(
                $(`
                    <div class="card m-4" style="max-width: 1240px;">
                    <div class="row no-gutters">
                        <div class="col-md-3">
                        <img src="${p.picture}" class="card-img" id="picture" style="height:20rem; width:10rem" alt="...">
                        </div>
                        <div class="col-md-50">
                        <div class="card-body">
                            <h5 class="card-title text-center" id="productName">${p.prodName}</h5>
                            <h5 class="card-title" id="Manufacturer">Manufacturer : ${p.manufacturer}</h5>
                            <h5 class="card-title" id="Manufacturer">Seller: ${p.shopName}</h5>
                            <h5 class="card-title" id="Price">Rs: ${p.price }</h5>
                            <p class="card-text" id="Description">${p.description}</p>
                            <a href="/components/shoppingCart.html" class="btn btn-primary" id="shoppingCart"  >Add to Cart</a>
                            <a href="#" class="btn btn-primary col-mx-8">Buy Now</a>
                            <!--<p class="card-text mx-6"><small class="text-muted">Last updated 3 mins ago</small></p>-->
                        </div>
                        </div>
                        
                    </div>
                    </div>
                 `)
             )
             $("#shoppingCart").onclick=function(){
                const cProdname=p.prodName, manufacturer=p.manufacturer,price=p.price,description=p.description
                $.post('/api/cart',
                        {cProdname,manufacturer,price,description}
                )
            }
           
        }
    })
}

