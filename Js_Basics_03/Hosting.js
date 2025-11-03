function one(){
    const username = "Rajnandani"

    function two(){
        const website ="youtube"
        console.log(username);
    }
    console.log(website);

    two()
}

//one()

if(true){
    const username ="Rajnandani"
    if(username ==="Rajnandai"){
        const website ="youtube"
        console.log(username  + website);
    }
    //console.log(website);//error because website is not defined in this scope , it is defined in inner scope 
}

//console.log(username); //error because username is not defined in this scope , it is defined in inner scope


//+++++++++++++++++++++++


function addone(num){
    return num + 1
}