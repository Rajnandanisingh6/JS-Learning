//Practice  on control flow and switch and truthy and falsy values

//question 1
//write a program to check whether a number is even or odd using if else


//     const num =6;
// if(num % 2 ===0){
//     console.log(`${num} is even number`);
// }else{
//     console.log(`${num} is odd number`);
// }

//question 2
//write a program to check whether a number is positive , negative or zero using if else if else

    // const number = -7;
    // if(number >0){
    //     console.log(`${number} is positive number`);
    // }else if(number < 0){
    //     console.log(`${number} is negative number`);
    // }else{
    //     console.log(`${number} is zero number`);
    // }
//question 3
//write a program to check whether a person is eligible for voting or not using ternary operator

// const age = 20;
// age >= 18 ? console.log("person is eligible for voting") : console.log(" person is not eligible to vote");

// let age =17 ;
// let eligibility = (age >=18) ? "eligible for voting " : "not eligible for voting";
// console.log(eligibility);


//question 4
//write a program to check whether a number is divisible by 5 and 11 using switch case

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const number = 55; 

switch(number){
    case (number % 5 ===0 && number % 11 ===0):
        console.log(`${number} is divisible by 5 and 11`);
        break;

        default:
            console.log(`${number} is not divisible by 5 and 11`);
            break;       
}



//question 5
//write a program to check whether a character is vowel or consonant using switch case
//question 6
//write a program to check whether a year is leap year or not using if else
