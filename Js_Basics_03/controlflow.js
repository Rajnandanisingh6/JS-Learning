//if
// const isuserloggedIn= true
// const temperature = 41
// if (temperature === 40){
//     console.log("less than 50");
//     // code to be executed if condition is true
// }else {
//     console.log("temperature is greater than 50");
// };
// console.log("executed")



// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }

//console.log(`uuser power: ${power}`); // not executed



// const balance = 1000;

// if (balance < 500){
//     console.log("less than 500");
// }else if (balance < 750){
//     console.log("less than 750");
// }else if (balance < 900){
//     console.log("less than 900")
// }else{
//     console.log("less than 1200")
// }



const UserLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// if (UserLoggedIn && debitCard){
//     console.log("Allow user to make purchase");
// }
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}