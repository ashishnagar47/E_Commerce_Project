

function cartProducts(){
    $.get(`/api/cart`,(cartProducts)=>{
        for(let p of cartProducts){
        
             $('#product-container').append(
                 $(`

                    <div class="card m-4" style="max-width: 1240px;">
                    <div class="row no-gutters">
                        <!--<div class="col-md-3">
                        <img src="..." class="card-img" style="height:20rem; width:10rem" alt="...">
                        </div>-->
                        <div class="col-md-8">
                        <div class="card-body mx-22">
                            <h5 class="card-title text-center">${p.cProdName}</h5>
                            <h5 class="card-title">Manufacturer : ${p.manufacturer}</h5>
                            <h5 class="card-title">Rs: ${p.price }</h5>
                            <p class="card-text">${p.description}</p>
                            <a href="#" class="btn btn-primary col-mx-8">Buy Now</a>
                            <!--<p class="card-text mx-6"><small class="text-muted">Last updated 3 mins ago</small></p>-->
                        </div>
                        </div>
                    </div>
                    </div>


                 `)
             )
           
        }
    })
}
