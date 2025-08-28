//Temporal Dead Zone
//Variable Scoping
//Global
//Function
//Block


//global scope
var age=15;
console.log(age);

{
    console.log(age)
}
if(true){
    console.log(age)
}
for(let i=0;i<2;i++){
    console.log(age);
}
function sayHello(){
    console.log("hi",age);
}
sayHello();