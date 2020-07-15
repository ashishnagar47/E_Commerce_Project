'use strict';
var PAYTM_STAG_URL = 'https://pguat.paytm.com';
var PAYTM_PROD_URL = 'https://secure.paytm.in';
var MID = 'dWZWwa49226361953783';
var PAYTM_ENVIORMENT = 'PROD';   // PROD FOR PRODUCTION
var PAYTM_MERCHANT_KEY = '44DD_IjJMPlcQxXb';
var WEBSITE = 'DEFAULT';
var CHANNEL_ID =  'WEB';
var INDUSTRY_TYPE_ID = 'Retail';
var PAYTM_FINAL_URL = '';
if (PAYTM_ENVIORMENT== 'PROD') {
  PAYTM_FINAL_URL = 'https://securegw.paytm.in/order/process';
}else{
  PAYTM_FINAL_URL = 'https://securegw.paytm.in/order/process';
}

module.exports = {
    MID: MID,
    PAYTM_MERCHANT_KEY :PAYTM_MERCHANT_KEY,
    PAYTM_FINAL_URL :PAYTM_FINAL_URL,
    WEBSITE: WEBSITE,
    CHANNEL_ID: CHANNEL_ID,
    INDUSTRY_TYPE_ID: INDUSTRY_TYPE_ID
};
