// оператор і ||

let cash = 30;
let creditCard = 100;
let price = 40;

let hasEnoghtCash = cash >= price;
let hasEnoghtCredit = creditCard >= price;

let canBuy = hasEnoghtCash || hasEnoghtCredit;



оператор або &&

let cash = 30;
let creditCard = 100;
let price = 40;

let hasEnoghtCash = cash >= price;

console.log(canBuy)