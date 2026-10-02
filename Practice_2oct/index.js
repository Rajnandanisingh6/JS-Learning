//Practice closure

// Har closure question mein yehi 3 step hote hain:

// Outer function banao aur uske andar ek variable rakho (ye "saaman" hai).
// Inner function return karo jo us variable ko use kare (ye "bag" hai).
// Outer ko ek baar call karke result kisi variable mein store karo, phir wo variable baar-baar call karo.


// Solved Example 1: Counter

// Sawal: ek counter banao jo har call pe 1 badhaye.


function makeCounter(){
    let count =0;                  // step 1: yaad rakhwana wala variable

    return function(){                    // step 2: inner function return
        count++;                               
        return count
    }
}
const counter = makeCounter();            // step 3: ek baar call, store
// console.log(counter())
// console.log(counter())
// console.log(counter())

const anotherCounter = makeCounter();                 // naya counter, apna alag count
// console.log(anotherCounter()) 
// console.log(anotherCounter())

//----------------------------------------------

// Solved Example 2: Multiplier

// Sawal: ek function banao jo ek number leta hai, aur ek naya function deta hai jo kisi bhi number ko us number se multiply kare.

function createMultiplier(a){
    return function(b){
        return a*b
    }
}
const multiplier = createMultiplier(5);
const multiplier2 = createMultiplier(12);
// console.log(multiplier(6)) //30
// console.log(multiplier2(5)) //60


//-------------------------------------
// Level 1: Easy

// Q1. Greeter: makeGreeter("Riya") ek function return kare. Us function ko call karne par "Hello Riya" print ho.

function makeGreeter(name){        //how it is work  --> ye phale ak function banega jisme name variable hoga, aur ye function return karega ek aur function jo name ko use karke "Hello Riya" print karega.

    return function(){
        return `Hello ${name}`
    }
}
const greeter = makeGreeter("Riya");
// console.log(greeter()) //Hello Riya

//------------------------------------
// Q2. Adder: makeAdder(10) return kare ek function jo number leke 10 add kare.

// Expected:
// const add10 = makeAdder(10);
// add10(5);   // 15
// add10(20);  // 30

function makeAdder(num1){
    return function(num2){
        return num1+num2
    }
}
const add10 = makeAdder(10);
// console.log(add10(5)); // 15
// console.log(add10(20)); //30

//------------------------------------------------

// Q3. Step counter: makeCounter(step) banao, jisme counter har baar step se badhe.

// Expected:
// const by5 = makeCounter(5);
// by5();  // 5
// by5();  // 10
// by5();  // 15

function makeStepCounter(step) {
  let count = 0;
  return function () {
    count += step;
    return count;
  };
}
const by5 = makeStepCounter(5);
console.log(by5());
console.log(by5());
console.log(by5());

//----------------------------------
