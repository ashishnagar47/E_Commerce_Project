const{Router}=require('express')
const route=Router()
//const {User}=require('../db/model')


const checksum_lib=require('../../Paytm_Web_Sample_Kit_NodeJs/checksum/checksum')
//const port=5000

    route.get('/',(req,res)=>{
        let params={}
        params['MID']='CfAnGi48184878864279',
        params['WEBSITE']='WEBSTAGING',
        params['CHANNEL_ID']='WEB',
        params['INDUSTRY_TYPE_ID']='Retail'
        params['ORDER_ID']='ORD0001'
        params['CUST_ID']='cust0001',
        params['TXN_AMOUNT']='10'
        params['CALLBACK_URL']='https://merchant.com/callback/'
        params['EMAIL']='xmxm@gmail.com',
        params['MOBILE_NO']='8945612378'
        

        checksum_lib.genchecksum(params,'Kt4iPtLhAULkEp%A',function(err,checksum){
            let txn_URL="https://securegw-stage.paytm.in/order/process"
        

        let form_fields=""
        for(x in params)
        {
            form_fields+="<input type='hidden' name='"+x+"' value='"+params[x]+"'/>"
        }

        form_fields+="<input type='hidden' name='CHECKSUMHASH' value='"+checksum+"' />"

        var html= '<html> <body> <center> <h1>Please wait! Do not refresh the page</h1> </center> <form method="post" action="'+txn_URL+'" name="f1">'+form_fields+'</form> <script type="text/javascript">document.f1.submit()</script></body> </html>'

         res.writeHead(200,{'Content-type':'text/html'})
         res.write(html)
         res.end()
    })
    })

module.exports={
    paymentRoute:route
}
