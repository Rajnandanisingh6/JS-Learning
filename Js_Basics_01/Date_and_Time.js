//Date and Time

//Dates

let myDate =new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); //object

// let myCreatedDate = new Date(2025,0,25);
// console.log(myCreatedDate.toDateString());
//let myCreatedDate = new Date(2025,0,25,5,5);
let myCreatedDate = new Date("2025-01-18");
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now()); // ye hame milli second me dega
// console.log(Math.floor(Date.now()/1000)); //ye hame second me dega

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth())

// `${newdate.getDay()} and the time `

newDate.toLocaleString('default',{
    weekday:"long",
    
})