//const coding =["Js","ruby","java","python","cpp"]

// const values = coding.forEach((item)=>{
//     //console.log(item);
//     return item;
// })

// console.log(values);//undefined because forEach does not return anything

 const myNums=[1,2,3,4,5,6,7,8,9,10];

//  //const newNums = myNums.filter((num) => num > 4)
//  const newNums = myNums.filter((num)=>{
//     return num > 4
//  })

//  const newNums = []

//  myNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num);
//     }

//  })
//  console.log(newNums);

const books =[
    {title:'Book one',genre:'fiction',publish:1981,edition:2004},
    {title:'Book two',genre:'science',publish:1992,edition:2008},
    {title:'Book three',genre:'history',publish:1999,edition:2007},
    {title:'Book four',genre:'fiction',publish:1989,edition:2010},
    {title:'Book five',genre:'science',publish:2009,edition:2014},
    {title:'Book six',genre:'history',publish:1987,edition:2010},
];

//const userBooks = books.filter((bk)=> bk.genre === 'history')

//const userBooks=books.filter((bk) => bk.publish >=2000)
const userBooks = books.filter( (bk)=> {
    return bk.publish >= 1995 && bk.genre === "History"
}) //[] kyu aa raha hai because no book matches both conditions

console.log(userBooks);