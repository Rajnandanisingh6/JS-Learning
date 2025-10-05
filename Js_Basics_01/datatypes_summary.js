//primitive 

//7 types : String, Number, BigInt, Boolean, Undefined, Null, Symbol

const score=100
const scoreValue=200.3
const isLoggedIn=false
const Temp=null
let userEmail;
const id=Symbol('1234')
const anotherId=Symbol('1234')
console.log(id===anotherId);//false because symbol is unique

const bigNumber=333334444444444488888n

//Reference type (Non-primitive)

//Array,Objects,Functions

const heros=["shaktiman","naagraj","doga"]; //array
//object
let myObj ={
    name:"Rama",
    age:23,
}
//function
const myFunction = function(){
    console.log("Hello World");
}

// console.log(typeof bigNumber);
// console.log(typeof score);
// console.log(typeof isLoggedIn);
// console.log(typeof myFunction);

//+++++++++++++++++++++++++++++++++++++++++++


//stack(primitive) ,Heap memory(Non-primitive)

//primitive data types are stored in stack memory
//reference data types are stored in heap memory and reference to that memory is stored in stack memory

let myYoutubeName="techMinute";

let anotherName=myYoutubeName;
anotherName="chaiaurtech";


// console.log(myYoutubeName);
// console.log(anotherName);

let userOne ={
    email:"user@google.com",
    upi:"user@upi"
}
let userTwo=userOne;
userTwo.email="raj@google.com"
console.log(userOne.email);
console.log(userTwo.email);


