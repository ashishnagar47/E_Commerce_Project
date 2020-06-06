function loadProducts(){
    $.get('/api/products',(products)=>{
        for(let p of products){
            $('#product-container').append(
                $(`
                <div class="m-4">
                    <div class="card" style="width: 18rem;">
                    <!--<img src="${p.picture}" class="card-img-top" alt="...">-->
                    <div class="card-body">
                    <h5 class="card-title text-center">${p.prodName}</h5>
                    <h5 class="card-title">Manufacturer:  ${p.manufacturer}</h5>
                    <h5 class="card-title">Rs: ${p.price}</h5>
                    <p class="card-text">${p.description}</p>
                    <a href="#" class="btn btn-primary">Add to Cart</a>
                    <a href="#" class="btn btn-primary">Buy Now</a>
                    </div>
                </div>
                `)
            )
        }
    })
}
