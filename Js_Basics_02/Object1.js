//const tinderUser = new Object() // ye singleton object hai
const tinderUser = {}  // not singleton object hai

 tinderUser.id = "123abc"
 tinderUser.name = "Suman"
 tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser={
    email: "sam@gamil.com",
    fullname:{
        userfullname:{
            firstname:"Rajnandani",
            lastname:"Singh"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 ={3:"c", 4:"d"}

//const obj3 ={obj1,obj2}
//const obj3 =Object.assign({},obj1,obj2)

const obj3 ={...obj1, ...obj2} // mainly we use this
//console.log(obj3);

const users =[
    {
        id:1,
        email:"R@gamil.com"
    },
     {
        id:1,
        email:"R@gamil.com"
    }
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'))