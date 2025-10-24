

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
//console.log(loginUserMessage("Riya"))

function calculateCarPrice(val1, val2,...num1){   // ... isi ko rest operator bhi bola jata hai spread operator bhi its depands on use case
    return num1
}
console.log(calculateCarPrice(200,400,600,2000))

const user ={
    username:"Rajnandani",
    price:199
}

function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}
//handleobject(user)
// handleobject({
//     username:"sam",
//     price:299
// })

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,600,1000]));