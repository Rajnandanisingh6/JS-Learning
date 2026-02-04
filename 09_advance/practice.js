//Promise 

const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task is complete ")
        resolve()
    },1000)

}).then(function(){
    console.log("promise consumed")
})

//--------------------------------------------------
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2 complete")
        resolve()
    },1000)
}).then(function(){
    console.log("Async task 2 resolved")
})

//-------------------------------------------------

const promisrThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Raj", email:"raj!example.com"})
        
    },1000)
})
.then(function(user){
    console.log(user);
})

//----------------------------------------------

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Nandu" , password:"12343"})

         }else{
            reject("Error : something went wrong")
        }
    },1000)
})
promiseFour.then(function(user){
    console.log(user);
    return user.username
}).then(function(username){
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(function(){
    console.log("the promise is either resolved or rejected")
})

//--------------------------------------------------------
 const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
           // let error = true
           let error = false
        if(!error){
            resolve({username:"CoderRaj" , password:"12343"})

         }else{
            reject("Error : something went wrong")
        }
    },1000)

    
 })

 async function consumePromiseFive(){
    try{
        const user = await promiseFive
        console.log(user);
    }catch(error){
        console.log("E:", error)
    }
 }
consumePromiseFive()

// async function getAllUser(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     }catch(error){
//         console.log("E :", error)
//     }
// }
// getAllUser()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()

})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log("E :" , error))
