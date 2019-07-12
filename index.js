import { environment } from "./environment";

const coinpayments = require("coinpayments");
const express = require("express");
const cors = require("cors");
const client = new coinpayments({key:environment.public_key, secret:environment.private_key});


// client.getBasicInfo()
// .then((result)=>{
//     console.log(result);
// }).catch(err=>{
//     console.log(err);
// });

// client.rates({short: 0, accepted:1})
// .then((result)=>console.log(result.BTC));

client.createTransaction({
    currency1:"USD",
    currency2:"BTC",
    amount:20,
    buyer_email:"abrigonimrod@gmail.com",
}).then((result)=>{
    console.log(result);
});