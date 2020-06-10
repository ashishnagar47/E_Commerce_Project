function loadProducts(){
    $.get('/api/products',(products)=>{
        for(let p of products){
        
             $('#product-container').append(
                 $(`

                    <div class="card mb-3 m-4" style="max-width: 1240px;">
                    <div class="row no-gutters">
                        <div class="col-md-3">
                        <img src="${p.picture}" class="card-img" style="height:20rem; width:10rem" alt="...">
                        </div>
                        <div class="col-md-8">
                        <div class="card-body mx-22">
                            <h5 class="card-title text-center">${p.prodName}</h5>
                            <h5 class="card-title">Manufacturer : ${p.manufacturer}</h5>
                            <h5 class="card-title">Rs: ${p.price }</h5>
                            <p class="card-text">${p.description}</p>
                            <a href="#" class="btn btn-primary">Add to Cart</a>
                            <!--<p class="card-text mx-6"><small class="text-muted">Last updated 3 mins ago</small></p>-->
                        </div>
                        </div>
                    </div>
                    </div>


            <!--     <div class="m-4">
                    <div class="card" style="width: 20rem;">
                     <img src="${p.picture}" class="card-img-top"  style="height:5rem width:20rem" alt="...">
                     <div class="card-body">
                     <h5 class="card-title text-center">${p.prodName}</h5>
                     <h5 class="card-title">Manufacturer:  ${p.manufacturer}</h5>
                     <h5 class="card-title">Rs: ${p.price}</h5>
                     <p class="card-text">${p.description}</p>
                     <a href="#" class="btn btn-primary">Add to Cart</a>
                     <a href="#" class="btn btn-primary">Buy Now</a>
                     </div>
                 </div>-->
                 `)
             )
           
        }
    })
}
