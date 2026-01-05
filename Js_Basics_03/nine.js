// reduce method
const myNums =[1,2,3]

// const myTotal = myNums.reduce(function(acc,currval){
//     console.log(`accumulator: ${acc}  current value: ${currval}`);
//     return acc + currval;

// },0);

const myTotal = myNums.reduce((acc,curr)=>acc + curr,0);

console.log(myTotal);

// another example
const shoppingCart =[
    {
        itemName:"phone",
        price:12000
    },
     {
        itemName:"Book",
        price:200
    },
     {
        itemName:"Laptop",
        price:70000
    },
     {
        itemName:"pen",
        price:10
    },
     {
        itemName:"tv",
        price:50000
    },
]

 const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price ,0)
 console.log(priceToPay);