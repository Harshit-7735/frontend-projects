
var setings = {
    "async": true,
    "crossDomain": true,

    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    "method": "GET",
    "headers": {}

}
$.ajax(setings).done(function (response) {
    console.log(response);
    document.getElementById('bitcoin').innerHTML = response.bitcoin.usd;
    document.getElementById('ethereum').innerHTML = response.ethereum.usd;
    document.getElementById('dogecoin').innerHTML = response.dogecoin.usd;
    
});
