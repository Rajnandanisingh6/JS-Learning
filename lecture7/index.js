//Function Call
//call stack and Hosting
//hosting is a process variable declaration [var keyword] function declaration shift to the top in their scope.

//variable hosting
// console.log(age); // output --> undefined
// var age=25;


//   function hosting

// sayMyName("Rajnandani");

// function sayMyName(finalName){
//     console.log(finalName);
// }

//using let and const variable
//ReferenceError come in both case when using let and const 
// console.log(age); // canot access age before initialization
// let age=25;

//using function expression

// sayHello(); //call
// //noral function
// function sayHello(){
//     console.log("Hello jee, Kaise ho sare");
// }

// by using function expression
// error throw --> ReferenceError
// sayHello();     
//function expression
// let sayHello=function(){
//     console.log("Hello jee");
// }

//class Hoisting
// const object1=new Human();  // referenceError
// class Human {

// }



//----------------------------------------------
// function call stack
//stack --> Data structure ak asa container jo LIFO format me data ko store karta hai

//function --> first class citizens kyu khete hai
// kyu ki function do :-
//assign to variable
//as argument
// return function
//use function in DS
//as property


//---------------------

// let greet=function(){
//     console.log("Greeting for the day")
// }
// greet();

//how to pass function
// function greetMe(greet,fullName){
//     console.log("hello",fullName);
//     greet();

// }
// function greet(){
//     console.log("Greeting for the day")
// }
// greetMe(greet,"Singh");

//----------------------------------------

//function return

// function solve(number){
//     return function(number){
//         return number*number;
//     }
// }
// let ans=solve(5);
// let finalAns=ans(10);
// console.log(finalAns);

//------------------------------------------
//ds
// const arr={
//     function(a,b){
//         return a+b;
//     },
//      function(a,b){
//         return a-b;
//     },
//      function(a,b){
//         return a*b;
//     }
// };
// let first =arr[0];
// let ans = first(5,10);
// console.log(ans);











