// reduce => or kind of sum out of array 

const prices = [1,2,3,4,5]

const total = prices.reduce((acc, curval) => {
    // console.log(`acc : ${acc} and carval: ${curval}`)
    return acc + curval;
},0)

const totalTwo = prices.reduce((acc, curval)=> acc + curval, 10)
console.log(totalTwo); 