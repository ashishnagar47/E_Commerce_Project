function writeProduct(){
   $(()=>{
      $("#submit").click(()=>{

    const formData=new FormData()
    //const filefield=document.querySelector('input[type="file"]');
   
   formData.append('prodName',$("#prodName").val())
   formData.append('manufacturer',$('#manufacturer').val())
   formData.append('shopName',$('#shopName').val())
   formData.append('category',$('#category').val())
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


 })
   })
}