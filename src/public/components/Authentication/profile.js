// jQuery(window).load(function() {
//     sessionStorage.setItem('status','loggedIn') 
//    });


function writeUser(){
    const params = new URLSearchParams(document.location.search);
    const user=params.get("user")
    $("#product-container").append(`
    

    <div class="card bg-light m-4" style="max-width: 60rem; height:30rem">
        <div class="card-header h1">Profile Page</div>
        <div class="card-body justify-content-center">
            <h5 class="card-title">Hello ${user}  </h5>
            <p class="card-text"> Welcome to Our Site. E-commerce is revolutionizing the way we all shop in India. Why do you want to
            hop from one store to another in search of the latest phone when you can find it on the Internet in a single click? Not 
            only mobiles. Flipkart houses everything you can possibly imagine, from trending electronics like laptops, tablets, smartphones,
            and mobile accessories to in-vogue fashion staples like shoes, clothing and lifestyle accessories; from modern furniture like
            sofa sets, dining tables, and wardrobes to appliances that make your life easy like washing machines, TVs, ACs, mixer 
            grinder juicers and other time-saving kitchen and small appliances; from home furnishings like cushion covers, mattresses
            and bedsheets to toys and musical instruments, we got them all covered. You name it, and you can stay assured about finding
            them all here. For those of you with erratic working hours, Flipkart is your best bet. Shop in your PJs, at night or in the
            wee hours of the morning. This e-commerce never shuts down.</p>
            <div class="justify-content-center">
            <a href="../../components/Authentication/logout" class="btn btn-primary col-mx-8 justify-content-around">Logout</a>
            <a href="../../../../#" class="btn btn-secondary col-mx-8 justify-content-around">Return</a> 
            </div>
            </div>
        </div>
        </div>
    `
    )
}