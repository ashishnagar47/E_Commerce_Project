function writeProduct(){
$(()=>{
    $("#submit").click(()=>{
         const prodName=$("#productName").val()
         const manufacturer=$("#Manufacturer").val()
         const price=$("#Price").val()
         const description=$("#Description").val()
         const picture=$("#productPic").val()

         $.post('/api/products',{prodName,manufacturer,price,description,picture})
         $("#contents").load('/components/allProducts.html')
    })
})
} 