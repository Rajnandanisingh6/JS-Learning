const user ={
    username : "Rajnandani",
    loginCount : 9,
    signedIn : true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        //console.log(`Username: ${this.username}`);
        console.log(this);

    }
}


//console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this);


//-------------------------------------------

//constructor function

// const promiseOne = new Promise()
// const date = new Date()

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = new User("Nandani",11,true)
const userTwo = new  User("Nandu",8,false)
console.log(userOne);
console.log(userTwo);

//new -- empty object create hota hai / new object create ho raha hai
// constructor function call hota hai new keyword ke karn
// this keyword ke andar argument inject ho ja ta hai
// function ke andar mil jate hai

//instance Of