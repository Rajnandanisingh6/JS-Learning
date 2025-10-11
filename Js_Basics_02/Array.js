//Array

const myArr =[0,1,2,3,4,5]
// const myHeros=["shaktiman","naagraj"]

// const myArr2 = new Array(1,2,3,4)

// console.log(myArr);
// console.log(myArr[0]);
// console.log(myArr[1]);

//shallow copy and deep copy

// Array methods

// myArr.push(6); // add element at end 
// myArr.push(8);
// myArr.pop(); // delete element from the end

myArr.unshift(4) //add on starting 
myArr.shift(); //remove from the starting

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);

//slice , splice

// console.log("A ",myArr);

const myn1 = myArr.slice(1, 3);

// console.log(myn1);
// console.log("B ",myArr);

const myn2 = myArr.splice(1, 3);
// console.log("c ", myArr); // original array hi manuplate ho gaya hai
// console.log(myn2);

const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

//marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

const all_new_heros =[...marvel_heros, ...dc_heros] //sprad operator

//console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const useable_another_array = another_array.flat(Infinity)
// console.log(useable_another_array);


console.log(Array.isArray("Rajnandani"))
console.log(Array.from("Rajnandani"))
console.log(Array.from({name: "Rajnandani"})) // interview ask question 
// ye ak empty array return karega -- []

let score1 =100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
