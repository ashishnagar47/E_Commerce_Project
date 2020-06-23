

function cartProducts(){
    $.get(`/api/cart`,(cartProducts)=>{
        for(let p of cartProducts){
             $('#product-container').append(
                 $(`
                <div class="card m-3 " style="width:800px" style="max-width: 540px;">

                <div class="row no-gutters">
                    
                <img src="${p.picture}" class="card-img" id="picture" style="height:20rem; width:10rem" alt="...">
            
                <div class="card-body">
                        <h5 class="card-title text-center" id="productName">${p.cProdName}</h5>
                        <br>
                        <h5 class="card-title" id="Manufacturer">Manufacturer: ${p.manufacturer}</h5>
                        
                        <h5 class="card-title" id="Seller">Seller: ${p.shopName}</h5>
                        
                        <h5 class="card-title" id="Price">Rs: ${p.price }</h5>
                        
                        <p class="card-text" id="Description"></p>
                        <br>
                        
                    </div>
                    </div>
                    
                </div>
                </div>
             `)





            

                

             )
           
        }
        
    })
    
    

}
