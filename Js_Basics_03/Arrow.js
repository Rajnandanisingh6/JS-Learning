const user ={
    username : "Rajnandani",
    Price :499,

    welcomeMessage : function (){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

    // this current context ko refer karta hai

}
// user.welcomeMessage()
// user.username = "suman"
// user.welcomeMessage()

//console.log(this);  // this global context ko refer karta hai // browser me window object ko refer karega
// {} // node me empty object ko refer karega


// function coffeeshop(){
//     let username ="Rajnandani"
//     console.log(this.username); // undefined , kyuki this global context ko refer kar raha hai jisme username defined nahi hai 
// }

// coffeeshop()


// const chai =  function (){
//     let username = "Rajnandani"
//     console.log(this.username); // undefined , kyuki this global context ko refer kar raha hai jisme username defined nahi hai
// }
// chai()

const chai = () => {
    let username = "Rajnandani"
    console.log(this); //{} // arrow function me this upper scope ko refer karta hai , yaha global scope jisme empty object hai
}
//chai() // arrow function me this upper scope ko refer karta hai , yaha global scope jisme username defined nahi hai isliye undefined aayega

// const addTwo = (num1 , num2) => {
//     return num1 + num2        // explicit return
// }

//const addTwo = (num1 , num2) => num1 + num2 // implicit return

//const addTwo = (num1 , num2) => (num1 + num2) // implicit return with parentheses   

const addTwo = (num1 , num2) => ({username :"Rajnandani"}) // implicit return of object

console.log(addTwo(5,6));
