

function cartProducts(){
    $.get(`/api/cart`,(cartProducts)=>{
        for(let p of cartProducts){
        
             $('#product-container').append(
                 $(`
                 <div class="row" style="max-width: 1240px; width:800px">
                        
                        <div class="col-sm">
                            <div class="card m-2">
                                <div class="card-body">
                                    <h5 class="card-title text-center" id="productName">${p.cProdName}</h5>
                                    <h5 class="card-title" id="Manufacturer">Manufacturer : ${p.manufacturer}</h5>
                                    <h5 class="card-title" id="Price">Rs: ${p.price }</h5>
                                
                                    <div> Quantity: 
                                        <input type="number" value="1" min="1"  id="inp">
                                        <button id="check">Check Total</button>
                                    </div>
                                    <br>
                                    <!-- <div>Total Price==> 
                                         <a id="total">${p.price}</a>
                                     </div>-->
                                     <script>
                                    //     $("#check").click(()=>{
                                    //         let price=$("Price").text()
                                    //         let input=$("inp").val()
                                    //         let t=price*input;
                                    //         console.log(price)
                                    //         $("#total").val(t);
                                    //     })
                                     </script>
                                    <a href="#" class="btn btn-primary col-mx-8">Buy Now</a>
                                    <!--<p class="card-text mx-6"><small class="text-muted">Last updated 3 mins ago</small></p>-->
                                </div>
                            </div>
                        </div>

                
                 `)
             )
           
        }
        
    })
    
    

}
