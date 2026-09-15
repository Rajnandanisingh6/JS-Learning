//operators Practice
// console.log("10" + 1);  //101
// console.log("10" - 1); //9
// console.log(true + false); //1
// console.log(!!"Sheryians"); //true
//----------------------------
// let str = "42";
// let num = +str;
// console.log(num); //42 //how to convert string to number // before ES6 we use parseInt() or parseFloat() to convert string to number but after ES6 we can use + sign to convert string to number
// console.log(typeof num); //number

//-------------------------
// let age = 17;
// let msg = age >= 18 ? "Adult" : "Minor";
// console.log(msg);//Minor

//-----------------------------

// Ek calculator function banao switch + arithmetic operators use karke — calc(a, b, operator) jo +, -, *, / handle kare.
function calc(a,b,operator){
    switch(operator){
        case "+":
            return a+b;
        case "-":
            return a-b;
        case "*":
            return a*b;
        case "/":
            return a/b;
        default:
            return "Invalid operator";
    }
}
// console.log(calc(4,8,"+")) //12
// console.log(calc(4,8,"-"))//-4
// console.log(calc(4,8,"*"))//32
// console.log(calc(4,8,"/"))//0.5
// console.log(calc(4,8,"%"))//Invalid operator

//------------------------------
// Marks 82 hain — "Excellent", "Good", "Average", ya "Fail" print karo range ke basis pe (khud ranges decide karo).
// let marks = 82;
// let grade =marks >=90?"Excellent":marks>=75?"Good":marks>=50?"Average":"Fail";
// console.log(grade)//Good
//-----------------
// let marks =82;
// if(marks>=90){
//     console.log("Excellent");
// }else if(marks>=75){
//     console.log("Good");
// }else if(marks>=50){
//     console.log("Average");
// }else{
//     console.log("Fail");
// }

//-------------------------------
