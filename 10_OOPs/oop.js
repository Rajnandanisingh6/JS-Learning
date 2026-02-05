const user ={
    username : "Rajnandani",
    loginCount : 9,
    signedIn : true,

    getUserDetails: function(){
        console.log("Got user details from database");
    }
}


console.log(user.username);
console.log(user.getUserDetails());