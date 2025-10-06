const name ="Nandani"
const repoCount =20

//console.log(name + repoCount + " Value");

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName =new String('Nandani-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('d'));

const newString=gameName.substring(0, 4);
//console.log(newString);

const anotherString=gameName.slice(-6, 4);
//console.log(anotherString);

const newStringOne = "  Nandani  ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url ="https://nandu.com/nandu%20rajput"

console.log(url.replace('%20', '-'))

console.log(url.includes('nandu'))

console.log(gameName.split('-'));
