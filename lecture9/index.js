// //Classes
// class Human{
//     //properties
//     age =13; //Public
//     #wt=50; //private
//     ht=180;


//     //behaviour

//     walking(){
//         console.log("I am   Walking",this.#wt); //this means current object ko bata raha hai
//     }

//     running(){
//         console.log("I am Running")
//     }
//     //getter --> use for fetch
//     get fetchWeight(){
//         return this.#wt;
//     }
//     //setter --> use for modify
//     set modifyWeight(val){
//         this.#wt=val;

//     }
// }
// let obj = new Human();
// console.log(obj.age);
// obj.walking();



// //Constructor
// class Human1{
//     age;
//     #wt=48;
//     ht=180;
//     constructor(newAge,newHeight){
//         this.age=newAge;
//         this.ht=newHeight;
//     }
// }
// let obj1 =new Human1(40,190);
// console.log(obj1.ht);

//default parameter -> allow to we function with default parameters
function sayName(myName ="Riya"){ // yaha par riya default value ki tarah kam kar rahi hai
    console.log("My Name is: ",myName);
}
sayName("Raj"); // undefined output because hamne value pass hi nahi kiye hai
