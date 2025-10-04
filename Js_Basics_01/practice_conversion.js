//conversion practice

//convert false to number

let score=false;

let scoreInNumber=Number(score);
//console.log(scoreInNumber);
//console.log(typeof scoreInNumber);

//convert 123 to string
let value=123;

let valueInNumber=String(value);
//console.log(valueInNumber);
//console.log(typeof valueInNumber);

//convert "25.5px" into number properly
let price="25.5px";

let priceValue=Number(price);
//console.log(priceValue); //NaN because of px
//console.log(typeof priceValue);

//convert 0 to boolean

let isLoggin=0;

let isValue=Boolean(isLoggin);
console.log(isValue);
console.log (typeof isValue); 
