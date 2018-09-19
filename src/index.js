// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var message = {};
    if (currency > 10000){
        message.error = "You are rich, my friend! We don't have so much coins for exchange";
        return message;
    }
    if (currency > 0 && currency < 10000) {
        var numberOfCoin50;
        var numberOfCoin25;
        var numberOfCoin10;
        var numberOfCoin5;
        var numberOfCoin1;
        numberOfCoin50 = Math.floor(currency / 50);
        currency = currency - numberOfCoin50 * 50;
        numberOfCoin25 = Math.floor(currency / 25);
        currency = currency - numberOfCoin25 * 25;
        numberOfCoin10 = Math.floor(currency / 10)
        currency = currency - numberOfCoin10 * 10;
        numberOfCoin5 = Math.floor(currency / 5);
        currency = currency - numberOfCoin5 * 5;
        numberOfCoin1 = currency;
        var h = numberOfCoin50 > 0 ? { 'H': numberOfCoin50 } : null
        var q = numberOfCoin25 > 0 ? { 'Q': numberOfCoin25 } : null
        var d = numberOfCoin10 > 0 ? { 'D': numberOfCoin10 } : null
        var n = numberOfCoin5 > 0 ? { 'N': numberOfCoin5 } : null
        var p = numberOfCoin1 > 0 ? { 'P': numberOfCoin1 } : null
        message = {
            ...h, ...q, ...d, ...n, ...p
        }   
    }
    return message;
}
