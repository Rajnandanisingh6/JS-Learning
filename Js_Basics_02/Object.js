//singleton  // interview point contstruction se banega toh singleton hoga aur litral se banega toh singleton nahi hoga

//Object literals ye tarika hai object ko declare karne ka

// Object.create  constructor ke andar

const mySym = Symbol("key1")
const JsUser = {
    name: "Rajnandani",
    age : 19,
    location:"Gorakhpur",
    email:"Rajnandani@gmail.com",
    [mySym]:"myKey1",
    isLoggedIn:false,
    lastLoginDays:["monday","Saturaday"]
}
// console.log(JsUser.age);
// console.log(JsUser["email"])
// // console.log(JsUser.mySym)
// console.log(JsUser[mySym])
// console.log(typeof JsUser.mySym)

//object ko change karna ho tab
JsUser.email = "Nandani@chatgpt.com"  // ye over ride kar deta hai 

// agar mujhe freeze karna ho ya mujhe chahiye ki koi bhi change na kar paye mere object me 
// toh ham freeze apne object par laga sakte hai
// Object.freeze(JsUser)
// JsUser.email ="nandu@microsoft.com"
// console.log(JsUser)


JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User , ${this.name}`);
}

// console.log(JsUser.greeting); // [function (anonymous)] de raha hai
console.log(JsUser.greeting()); 
console.log(JsUser.greetingTwo())

