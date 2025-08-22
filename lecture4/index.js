// loops and String
// For Loop
//Synatax:- for(initialisation,condotion,updation){
 //logic
//}
// for(let i=1;i<=10;i++){
//     console.log("Rajnandani");
// }

// for counting number 1 to 5
// for(let i=1;i<=5;i++){
//     console.log(i);
// }
//Reverse counting
// for(let i=5;i>=1;i--){
//     console.log(i);
//}

// Break --> iteration jo last ho wahi par ruk jana
// for(let i=1;i<=6;i++){
//     if(i ==4){
//         break;
//     }
//     else{
//         console.log(i);
//     }
// }

//continue --> current iteration ko skip karna hai aur next iteration par jana hai
// for(let i=1;i<=6;i++){
//     if(i ==3){
//         continue;
//     }
//     else{
//         console.log(i);
//     }
// }

//while loop
//initialisation 
//while(condn)
//{
//loop logic
//updation
//}

// let i=1;
// while(i<=10){
//     console.log("Rajnandani");
//     i++;
// }


// let i=1;
// while(i<5){
//     console.log("Inside the loop");
//     if(i==3){
//         i++;
//         continue;

//     }     
//     else
//         console.log("Hi");
//     i++;
// }

//do-while loop

// let i=1;
// do{
//     console.log("Rajnandani");
//     //updation
//     i++;
// }while(i<=10);



//--------------------------------------------------

//string --> Sequence of character
// let firstName = "Rajnandani"
// let lastName = 'Singh'
// console.log(typeof(firstName));
//``-->back tick or template string
// let name =`Rajnandani 
// Singh this is
// my
// name
// hello`;
// console.log(name);


// let firstName = new String("Rajnandani Singh");
// console.log(firstName);


//operation on string

// let op1='English ';
// let op2='Hindi';
// let ans=op1 + op2;
// console.log(ans);

// let finalAns =`${op1} ${op2}`;
// console.log(finalAns)

// console.log(op2.length);

// console.log(op1.toUpperCase());
// console.log(op2.toLowerCase());

// let str="Rajnandani";
// console.log(str.substring(2));
// console.log(str.substring(2,4)); // ending index exclusive

//Split method on String
// let sentence="Hello Jee Kaise ho saare";

// let words=sentence.split(' ');
// console.log(words);

let sentence ="Hello \\jee \\kaise\\ \\ho \\sare";
let words=sentence.split('\\');
console.log(words);

console.log(words.join(','));


