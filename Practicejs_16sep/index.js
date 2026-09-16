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
//Control Flow pe chalte hain:

//Student grade logic — marks ke basis pe A, B, C, D, ya F print karo (if-else use karke, apne ranges decide karo).
// let marks=74;
// if(marks>=90){
//     console.log("Grade A");   
// }else if(marks >=75){
//     console.log("Grade B");
// }else if(marks >=50){
//     console.log("Grade C");
// }else if(marks >=35){
//     console.log("Grade D");
// }else{
//     console.log("Grade F");
// }



// Rock-Paper-Scissors — player1 aur player2 ka choice diya hai, winner ya draw print karo.

// let player1="rock";
// let player2="scissors";
// if(player1===player2){
//     console.log("Draw");
// }else if((player1==="rock" && player2==="scissors") || (player1==="scissors" && player2==="paper") || (player1==="paper" && player2==="rock")){
//     console.log("Player 1 wins");
// }else{
//     console.log("Player 2 wins");
// }



// Login message — isLoggedIn aur isAdmin combination ke basis pe alag messages dikhao.

// let isLoggedIn = true;
// let isAdmin = false;
// if(isLoggedIn && isAdmin){
//     console.log("Welcome Admin");   
// }else if(isLoggedIn && !isAdmin){
//     console.log("Welcome User");
// }else{
//     console.log("Please log in");
// }




// Weather advice — switch-case use karke, weather ke hisaab se kya pehno bolo.

// let weather ="Summer";
// switch(weather){
//     case"Summer":
//     console.log("wear light clothes");
//     break;
//     case"Winter":
//     console.log("wear warm clothes");
//     break;
//     case"Rainy":
//     console.log("carry an umberella and rainy coat");
//     break;
//     default:
//         console.log("wear normal clothes");
// }



// Age checker function — "Kid", "Teen", "Adult", ya "Senior" return kare.
// function ageChecker(age){
//     if(age>=0 && age<=12){
//     return "Kid";
// }else if(age>=13 && age<=19){
//     return "Teen";
// }else if(age>=20 && age<=59){
//     return "Adult";
// }else if(age>=60){
//     return "Senior";
// }else{
//     return "Invalid age";
// }

// }
// console.log(ageChecker(60))//Senior

//-------------------

