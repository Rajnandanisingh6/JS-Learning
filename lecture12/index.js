//Error Handling
// there are two type of error
//complie-error --> when code parce / before execution 
//Run time error --> while the code excute


//complie time error

//Synatax error
// console.log(1;

//Runtime error
//Reference error
// console.log(x);
//Handling
//try-catch block
// try{
//     console.log("try block starts here");
//     //error-> referennce error
//     console.log(x);
//     console.log("try block ends here");
//     //a

//     //b

//     //c

// }
// catch(e){
//     //define krte h,error ke sath aap kya karna chahte h
//     //retry
//     //fallback mechanism
//     //logging
//     //custom error
//     console.log("i am inside catch block");
//     console.log("yarr error is here: ",e);

// }
// finally{
//     console.log("I will run everytime,as i am finally block");
// }
//finally block --> this will run everytime

//---------------------------------------
//custom error create karna ho toh ham throw ka use karenge

//lets create a custom error
// try{
//     //Reference error
//     console.log(x);
// }
// catch{
//     throw new Error("Bhai pehle declare kro,fir print karna");
// }

//------------------------------
let errorCode =100;
if(errorCode ==100){
    throw new Error("Invalid Json");
}
