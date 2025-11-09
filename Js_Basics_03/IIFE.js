//Immediately Invoked function expressions (IIFE)

function chai(){
    console.log(`welcome to chai shop`);

}
//chai() //normal function call


(function coffee(){
    //named IIFE function
    console.log(`welcome to coffee shop`);
})(); //IIFE function call

//global scope pollution se bachata hai IIFE
//variable ko local scope me rakhta hai IIFE
//function ko local scope me rakhta hai IIFE
//ek baar hi call hota hai IIFE


//global scope ke pollution se problem hoti kai bar jo declaration ko hata deta hai

( (name) =>{
    //simple IIFE arrow function
    console.log(`DB connected ${name}`);
}) ('Rajnandani'); //IIFE arrow function call


