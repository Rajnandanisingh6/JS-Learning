// var age =25;



// if(true){
//     console.log(age);
// }

// function solve(){
//     var age=25;
//     console.log(age);
// }
// solve();


// function solve(){
//     var age=25;
//     console.log(age);
// }
// console.log(age);// this line give error --> age is not defined because var is function scoped or globally
// solve();
// we do not use globally var because -->debuging issue aata hai
// aur ham var ko re decalare bhi kar sakte hai
// var x=10;
// var x=10; //ye ham use kar sakte hai lekin ham karenge nahi kyu ki hame debuging face karini padegi



// let a = 10; // let hamra blocked scoped hota hai ise ham block ke bahar access nahi kar sakte hai
// console.log(a);

// {
//     let a=19;
//     console.log(a);
// }

// let mai re declare possible nahi 

// let a=10;
// let a=20;
// console.log(a); // ham ye nahi kar sakte kyu ki re declare let mai possible nahi hai error dega


// lekin ham mainuplate kar sakte or value change kar sakte jaise ki 
// let b=20;
// b=30;
// console.log(b);

// ye sab use kar sakte hai koi problem nahi aaye gi
// let a=10;
// a="nandani";
// console.log(a);
// a=true;
// a=null; 

// const a=20;
// console.log(a);

// variable namming convention
// reserved keyword
// Data Types --> type of data or size of data 
// In javascript --> two type of data type 
// first--> primitive data type
// second-->non-primitive data type
// Now we learn primitive data type 
// Number,String,Boolean,Undefined,Null,Symbol,BigInt-->2ki power 53 -1
// let marks=20;
// marks=40.546;
// marks="Nandani";
// marks=true;
// let marks; // this line give undefined data type
// console.log(marks);
// let value =null;
// console.log(value);

// let marks=9876543212780987645342321245647458869;
// console.log(marks);
// marks = 12;
// console.log(typeof(marks));
// marks="nandani";
// console.log(typeof(marks));

// homework --> learn about symbol data type

//Symbol is a built-in object whose constructor returns a symbol primitive — also called a Symbol value or just a Symbol — that's guaranteed to be unique.
// used to add unique property key 
// examples :-
// To create a new primitive Symbol, you write Symbol() with an optional string as its description:

// const sym1 = Symbol();
// const sym2 = Symbol("foo");
// const sym3 = Symbol("foo");
//The above code creates three new Symbols. Note that Symbol("foo") does not coerce the string "foo" into a Symbol. It creates a new Symbol each time:
// Symbol("foo") === Symbol("foo"); // false

//const sym = new Symbol(); // TypeError
//The following syntax with the new operator will throw a TypeError:



// const sym = Symbol("foo");
// typeof sym; // "symbol"
// console.log(sym);
// const symObj = Object(sym);
// typeof symObj; // "object"
// console.log(symObj); 

// pros and cons





