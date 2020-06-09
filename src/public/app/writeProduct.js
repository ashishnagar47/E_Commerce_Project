function writeProduct(){
   $(()=>{
      $("#submit").click(()=>{
//          const prodName=$("#prodName").val()
//          const manufacturer=$("#manufacturer").val()
//          const price=$("#price").val()
//          const description=$("#description").val()
//          const picture=$("#picture")[0].files[0]
//          console.log(picture)
//          $.post('/',{prodName,manufacturer,price,description,picture})
//          $("#contents").load('/components/allProducts.html')
//     })
//  })
// }

    const formData=new FormData()
    //const filefield=document.querySelector('input[type="file"]');
   
   formData.append('prodName',$("#prodName").val())
   formData.append('manufacturer',$('#manufacturer').val())
   formData.append('price',$('#price').val())
   formData.append('description',$('#description').val())
   formData.append('picture',$('#picture')[0].files[0])

   console.log(formData)

   fetch('/api/products', {
      method: 'POST',
      body: formData
      })
      .then(result => {
      console.log('Success:', result);
      })
      .catch(error => {
      console.error('Error:', error);
      });


    

//    // //  $.post('/api/products',formData)
//    // //  $('#contents').load('/components/allProduct.html') 
//    // })
 })
   })
}