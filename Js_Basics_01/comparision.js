// console.log(2>1);
// console.log(2 >=1);
// console.log(2 <1);
// console.log(2 ==1);
// console.log(2 !=1);


// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0); //the reason is that an equality check == and comparisions > < >= <= work differently.
//comparision operators convert null to a number, treating it as 0.
//that why null >=0 is true, but null >0 is false.

// console.log(undefined == 0); //false because undefined is not converted to a number
// console.log(undefined > 0);//false
// console.log(undefined < 0);//false

//strict check ===

console.log("2" === 2);//false because type is different

