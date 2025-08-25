//Arrays


//object --> collection of key value pair

// let obj={
//     name:"Rajnandani",
//     age :20,
//     weight:40,
//     height:"5ft 4in",
//     greet:function(){
//         console.log("hello jee kaise ho saare");
//     }
// };
// console.log(obj)
// obj.greet();
// console.log(typeof(obj));

//homework
//swallow copy
//deep copy



//-------------------------------------
//Arrays --> collection of items/elements
//syntax-->[] -- array literal
// array constructor


//creation of arrays
// let arr=[1,3,4,5,6];
// console.log(arr);

//array constructor
// let brr=new Array('Raj',1,true);
// console.log(brr);
// console.log(brr[0]);

//Build-in methods
//push methods -->insert at end
// brr.push("singh");
//pop --> remove last item
// brr.pop();

//shift --> remove first item
// brr.shift();

//unshift--> add --> first item
// brr.unshift("Rajnandani Singh");
// brr.push(20);
// brr.push(40);
// brr.push(70);
// console.log(brr.slice(2,4));
//splice --> content change
// brr.splice(1,2,"Raj");
// console.log(brr);

//-----------------------

//map

// let arr =[10,20,30];
// arr.map((number,index)=>{
//     console.log(number);
//     console.log(index);
// })

//----------------------------

// let arr =[10,20,30];
// let ansArray = arr.map((number) =>{
//     return number*number;
// })
// console.log(ansArray)


//-------------------------
//filter

// let arr =[10,20,30,33,11,44,54];
// let evenArray = arr.filter((number)=>{
//     return number%2 ===0;
//     // if(number%2 ===0){
//     //     return true;
//     // }
//     // else{
//     //     return false;
//     // }
// });
// console.log(evenArray);

//--------------------------------

//filter

// let arr =[1,2,'Nandani','Singh',null];

// let ans=arr.filter((value)=>{
//     if(typeof(value) === 'string'){
//         return true;
//     }
//     else{
//         return false;
//     }
// });
// console.log(ans);



//----------------------------------------
//Reduce
// let arr = [10,20,30,40];
// let ans = arr.reduce((acc,curr)=>{
//     return acc + curr;

// },0);

// console.log(ans);


// let arr =[9,5,3,6,3];
// arr.sort();
// console.log(arr);
//hw: how to do sort in descending order?
// console.log(arr.indexOf(9));
//hw: find



//----------------------------------------
// let arr=[10,20,30];

// let length =arr.length;
// console.log("length: ",length);
// //traditional loop

// for(let index=0;index<length;index++){
//     console.log(arr[index]);
// }
// arr.forEach((value,index) =>{
//     console.log("Number: ",value, "Index: ",index);
// })



//---------------------------------
//Array with function
let arr=[10,20,30,40,50];

// function getSum(arr){
//     let len =arr.length;
//     let sum=0;
//     for(let index=0;index<len;index++){
//         sum=sum + arr[index];        
//     }
//     return sum;
// }
// let totalSum=getSum(arr);
// console.log(totalSum);

//----------------------------------
function getSum(arr){
    let sum=0;
    arr.forEach((value)=>{
        sum=sum + value;
    })
    return sum;
}
let totalsum=getSum(arr);
console.log(totalSum);