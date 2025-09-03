//Object Cloning
// let obj={
//     age:12,
//     wt:56,
//     ht:187
// };
// console.log(obj); //object ko dynamic kyu khehte hai 
//kyu ki ham object ki property ko run time par change kar sakte hai

// obj.color="white";
// console.log(obj);
//Object Cloning
// cloning ->1 tarika -- spread operator
// let src={
//     age:12,
//     wt:56,
//     ht:187
// };
// let dest ={...src}; // cloning
//let dest =src; yaha par refrence ho raha hai / ye copy 

// src.age =90;

// console.log("src: ",src);
// console.log("dest: ",dest);
//cloning -> assign operator ka use kar ke bhi cloning kar sakte hai
// let src={
//     age:12,
//     wt:56,
//     ht:187
// };
// let src2={
//     value:100,
//     name:"Rajnandani"
// }
// let dest =Object.assign({},src,src2); //cloning
//  src.age =90;
// console.log("src: ",src);
// console.log("dest: ",dest);
//iteration ka bhi use kar ke cloning kar sakte hai

// let src={
//     age:12,
//     wt:56,
//     ht:187
// };
// let dest={};
// //cloning using iteration
// for(let key in src){
//     let newKey=key;
//     let newValue=src[key];
//     //insert newKey and value in dest and create a clone
//     dest[newKey]=newValue;
// }
// src.age=87;
// console.log("src: ",src);
// console.log("dest: ",dest);

//Grabage collector
//no contol
//run in background
//jo unuse hai use hata dega


