//Variable declare
//by 3 keywords 
//1- var-> var are function-scoped or globally-scoped, but not block-scoped
//var is function scoped
// when we declare a variable using var inside a function,we cannot acces the variable outside the function
// function cal(){
//     var age=18;
//     console.log(age);
// }
// cal(); // sahi se excute ho gaya
// Now 
// function cal(){
//     var age=19;
// }
// console.log(age); // error raise -> referenceError , because var is function-scoped or globally
// cal();

//2- let -> let keyword is used to declare variables that are block-scoped
//they are only accessible within the block in which they are defined
// let a=20;
// console.log(a);
{
    let a=23;
}
console.log(a);
//3 - const