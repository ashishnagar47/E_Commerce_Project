function writeProduct(){
$(()=>{
    $("#submit").click(()=>{
         const prodName=$("#productName").val()
         const manufacturer=$("#Manufacturer").val()
         const price=$("Price").val()
         const description=$("Description").val()

         $.post('/api/products',{prodName,manufacturer,price,description})
         $("#contents").load('/components/allProducts.html')
    })
})
} 