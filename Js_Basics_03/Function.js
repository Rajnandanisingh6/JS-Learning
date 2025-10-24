

// function sayMyName(){
//     console.log("R");
//     console.log("i");
//     console.log("y");
//     console.log("a");
// }
// sayMyName()

// function addTwoNumbers(number1,number2){ //parameters
//    console.log(number1 + number2);
// }

function addTwoNumbers(number1,number2){ //parameters
//    let result =number1 + number2
//    return result    // return ke baad kuch print karaenge print nahi hoga
      return number1 + number2

}
const result= addTwoNumbers(3,7) //arguments

//console.log("Result:",result);


function loginUserMessage(username = "sam"){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Rajnandani"))
console.log(loginUserMessage("Riya"))