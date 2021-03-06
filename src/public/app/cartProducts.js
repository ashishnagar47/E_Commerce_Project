



function deleteProduct(prod){

    const p=prod.getAttribute("data-component")

    $.ajax({
        url: `/api/cart/${p}`,
        type: 'DELETE',
        success: function(result) {
            console.log(result)
            // Do something with the result
        }
    });
    location.reload()
}


//let total_price, count,delivery_charge;

function cartProducts(){
    


    let total_price=0,count=0;
    $.get(`/api/cart`,(cartProducts)=>{
        
        for(let p of cartProducts){
            var price=p.price
            var pr=price.replace(",","");
            console.log("pr ",pr , typeof pr)
            total_price+=parseInt(pr)
            count+=1;
             $('#product-container').append(
                 $(`
                <div class="card m-3 " >

                <div class="row no-gutters">
                    
                <img src="${p.picture}" class="card-img" id="picture" style="height:20rem; width:10rem" alt="...">
            
                <div class="card-body">
                        <h5 class="card-title text-center"  id="productName">${p.cProdName}</h5>
                        <br>
                        <h5 class="card-title" id="Manufacturer">Manufacturer: ${p.manufacturer}</h5>
                        
                        <h5 class="card-title" id="Seller">Seller: ${p.shopName}</h5>
                        
                        <h5 class="card-title" id="Price">₹ ${p.price }</h5>
                        
                        <p class="card-text" id="Description"></p>
                        <br>

                        <a href="#" class="btn btn-secondary col-mx-8" onclick="deleteProduct(this)" data-component="${p.id}" style="width:200px">Remove</a>
                        

                    </div>
                    </div>
                    
                </div>
                </div>
             `)
             )     
        } 

        if(total_price>=1000){
            delivery_charge=0;
        }
        else if(total_price<1000 & total_price>500){
            delivery_charge=50;
        }
        else if(total_price<500 & count>0){
            delivery_charge=100;
        }
        else{
            delivery_charge=0;
        }
        var totalPrice=total_price+delivery_charge;

        t=totalPrice.toString();

        p=t.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")
        

        $('#product-contain').append(
        $(`
        <div class="card bg-light mb-3"  z-index:-5">
        <div class="card-header h3">Price</div>
        <div class="card-body">
        
            <h5>Total Item : ${count}</h5>

            <h5>Delivery Charges:  ₹ ${delivery_charge}</h5>
            _________________________________

            <h5 class="card-text">Total Price: ₹ ${p}</h5>
            

            <a class="btn btn-primary m-4" style="width:150px" href="/api/payment" type="submit" id="submit">Buy Now</a>
        </div>
        </div>
        `)
        )
        })
}



    