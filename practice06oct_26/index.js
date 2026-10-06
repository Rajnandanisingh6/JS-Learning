// Practice: square, isEven arrow function mein likho. Ek sentence banao: "My name is X and I am Y years old" template literal se.

const square = n => n * n;  //
const isEven = n=> n %2 === 0 ; //
const name = "Riya";
const age = 20;
const sentence = `My name is ${name} and I am ${age} years old`;
// console.log(square(5));
// console.log(isEven(4));
// console.log(sentence);


// Practice: ek product object banao (title, price, rating). title aur price destructure karo, aur rating ko stars naam do.

const product = {title: "Laptop", price: 50000, rating: 4.5};
const {title,price,rating : stars} = product;
// console.log(product);
// console.log(title);
// console.log(price);
// console.log(stars);

