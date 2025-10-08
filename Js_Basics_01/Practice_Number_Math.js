//Number Methods and Math Object in JavaScript
let str="45.678";
// console.log(Number(str)); //converts to number  -- output: 45.678

// console.log(parseInt(str));//converts to integer -- output: 45
// console.log(parseFloat(str));//converts to float --output :45.678

// console.log((45.6789).toFixed(2));//Round to 2 decimal values -- output: 45.68

// console.log((243).toString(16));//converts to hexadecimal -- output: f3

// console.log((243).toString(2));//converts to binary -- output: 11110011
// console.log((243).toString(8));//converts to octal -- output: 363

// let str1="abc123";
// console.log(Number(str1));//Not a number -- output: NaN
// console.log(isNaN(str1));//check if not a number -- output: true
// console.log(isNaN(123));//check if not a number -- output: false
// console.log(isFinite(123));//check if finite number -- output: true
// console.log(isFinite(Infinity));//check if finite number -- output: false

//Math.random() -- generates random number between 0 and 1
// console.log(Math.random());//output: random number between 0 and 1
//Math.Floor() 
let randomNum=Math.floor(Math.random()*10) +1;
console.log("Random number between 1 and 10: ",randomNum);

let randomNum1=Math.floor(Math.random()*50) +20;
console.log(randomNum1);

//use prompt to take input from user  in broweser
