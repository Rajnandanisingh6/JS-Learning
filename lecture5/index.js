//Function
//Basic Syntax --> function function()
             //   {
             //       code
              //  }
//----------------------------
// function without parameter
// function definition
// function sayMyName(){
//     console.log("Rajnandani Singh")
// }
// //function use  karne ke liye - function call function ko call karna hogo
// sayMyName();


// function printCounting(){
//     for(let i=1;i<=100;i++) {
//         console.log(i);
//     }
// }
// printCounting();

//-------------------------------

// function created with passes some parameters
// num is a parameter of this function 
// function printNumber(num){
//     console.log("printing Number:",num);
// }
// printNumber(5); //5 is arguments for this functiion call 

//----------------------------------------------------

// function getAverage(num1,num2){
//     let avg=(num1 +num2)/2;
//     console.log("average:",avg);
// }
// getAverage(8,8);


//Return functions --> asa function jo kuch return karta ho

// function getSum(a,b,c){
//     let sum=a + b + c;
//     return sum; //return asa ak keyword hai jo make sure karrta hai jis vakati ne mujhe function call ki hai use mai jo aage value di hai wo return kar de
// }
// let ans= getSum(1,2,3);
// console.log("Printing Sum: ",ans);


//---------------------------------------
// function getMyName(firstName,LastName){
//     let fullName=firstName + " " + LastName;
//     return fullName;
//     //unreachable statements
//     // let a =10;
//     // let b =15;
//     // let sum =a+b;
//     // console.log(sum);
// }
// let fullName=getMyName("Rajnandani","Singh");
// console.log("Fullname :",fullName);

//---------------------------------------
// function getMultiplication(a,b){
//     return a*b;
// }
// console.log(getMultiplication(2,10));

//-------------
// let getMultiplication=function(a,b){
//     return a*b;
// }
// let ans =getMultiplication(2,20);
// console.log(ans);

//---------------------------
// 1st type 
// function squareNumber(num){
//     let ans =num**2;
//     return ans;
// }
//2nd type
// let squareNumber =function (num){
//     let ans =num**2;
//     return ans;
// }
// let ans=squareNumber(5);
// console.log(ans);

//---------------------------

// function getExp(x,y){
//     let ans=x**y;
//     return ans;
// }
// console.log(getExp(2,10));

//Arrow function
let getExp=(x,y)=>{
    let ans=x**y;
    return ans;
}
console.log(getExp(2,10));