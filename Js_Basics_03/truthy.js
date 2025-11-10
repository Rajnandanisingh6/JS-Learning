// const userEmail = "R@nandani.ai"

// if(userEmail){
//     console.log("got user email");
// }else {
//     console.log("Don't have user email");
// }

//falsy values

//false ,0,-0,BigInt 0n,"",null,undefined,NaN

//truthy  values
//"0",'false'," ",[],{},function(){},new Date()

// if (userEmail.length === 0){
//     console.log("Array is empty")
// }

// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
// }


//Nullish Coalescing Operator (??) : null or undefined

let val1;
//val1 = 5 ?? 10 ; //5 because 5 is not null or undefined
//val1 = null ?? 10 ; //10 because null is null
//val1 = undefined ?? 10 ; //10 because undefined is undefined
val1 = undefined ?? 15 // 15 because undefined is undefined
val1 = null ?? 10 ?? 20 //
console.log(val1);

// ternary operator

//condition?true : false

const iceteaPrice = 100;
iceteaPrice <=80 ? console.log("icetea price is good") : console.log("icetea price is high");

