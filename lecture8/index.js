//Temporal Dead Zone
//Variable Scoping
//Global
//Function
//Block


//global scope
// var age=15;
// console.log(age);

// {
//     console.log(age)
// }
// if(true){
//     console.log(age)
// }
// for(let i=0;i<2;i++){
//     console.log(age);
// }
// function sayHello(){
//     console.log("hi",age);
// }
// sayHello();


//Function scope
// function sayHello(){
//     var fullname="sun";
//     console.log("Hello dunia",fullname);
// }
// sayHello();

//Block Scope
// {
//     var height=180;
// }
// console.log(height);

//Temporal dead zone
console.log(marks); //temporal dead zone
let marks=100;
console.log(marks);
