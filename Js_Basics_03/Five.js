const coding =["JS", "Python", "Java", "C++", "Ruby"];

// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach((item)=>{
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

const myCoding=[
    {
        languageName:'JavaScript',
        LanguageFileName:'js'
    },
     {
        languageName:'Java',
        LanguageFileName:'java'
    },
     {
        languageName:'python',
        LanguageFileName:'py'
    },
]

myCoding.forEach((item)=>{
    
     console.log(item.languageName)
})