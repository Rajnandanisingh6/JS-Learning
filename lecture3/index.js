// Operators and Conditionals
// symbols perform meaningful operation is known as operator
// Types -->1:-Arithmetic 
// Unary --> -- aur ++
// pre-increment
// post-increment

// let a=100;
// let b=55;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// let a= 2;
// let b= 5;

// console.log(a**b);

// arithmetic operator
let a= 2;
let b= 5;

//  a=a +10;
// a +=10;
// console.log(a);
//  a = a-2;
// a -=2;
// console.log(a);

// comparison operator --> output hamesa true ya false me aaye ga
// console.log(10 < 5);

// lose equality --> compare only value
// console.log('5' == 5);
// strick equality --> compare both value and data type
// console.log('5' === 5);
// homework --> != and !==


// Ternary Operator
// synatax :- (condition)?val1 : val 2
// val1 -- if  condition is true then then  return val1
// val2 -- if condition is false then return val1

// example:-let status= (age>18)?'I can vote' : 'I cannot vote';
// let age =25;
// let status1 =(age > 18) ? 'I can vote' : 'I cannot vote';

// console.log(status1);

// ------------------------------------------------------

// Logical Operators      
//     (cond && cond && cond)
//AND -> &&       --> sab  condition true h -- toh TRUE Return karega
//                 --> agar koi ek bhi condition false hai toh -- hame FALSE return karega
//OR -> ||     --> (con || cond || cond)
//            --> agar koi ak bhi condition  true higi toh 
//            --> TRUE Return karega
//NOT ->!     -->!(True) --> False 
//            -->!(FALSE) --> True

// ---------------------------------------------
// let ans = (true && false && true) 
// console.log(ans);

// let ans1=(false ||false || true) 
// console.log(ans1);

// let ans2=!(true)
// console.log(ans2);



// working with Non-Booleans
// short - circuiting
// console.log(false || 'Riya');
// console.log(false ||7 || 18  ||11);

// Bitwise Operator
//And--
//OR--
//Not--
//<< -- 
//>>
//XOR

// console.log(2 & 5);//0
// console.log(2 |5);//7
// console.log(~(0));//-1  
// not (~) --> bit level pr flipping karta hai

//XOR
// console.log(2^2);
//console.log(10<<1);

// -------------------------------------------------


// conditional
// 1. if-else
// 2. switch

// let age=57;
// if(age>=18){
//     console.log(' can vote')
// }
// else{
//     console.log('can not vote');
// }

// -----------------------------------------------
// let number=5;
// if(number==1){
//     console.log('a');
// }
// else if(number ==2){
//     console.log('b')
// }
// else if(number==3){
//     console.log('c')
// }
// else if(number==4){
//     console.log('d')
// }
// else if(number==5){
//     console.log('e')
// }
// else{
//     console.log('Invalid');
// }

//---------------------------------------------------
let num =3;
switch(num){
    case 1:console.log('A');
    break;
    case 2:console.log('b');
    break;
    case 3:console.log('c');
    break;
    case 4:console.log('d');
    break;
    default:console.log('f');
}