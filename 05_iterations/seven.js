// map

const myNums = [1,2,3,4,5,23,34,34,345,34,23,434,3]

const newNums = myNums.map((num)=> num +10);

// console.log(newNums);

const numbers = [1,2,3,4,5,6,7,8,9,10];

const chainedNums = numbers
                    .map((num)=> num *10)
                    .map((num)=> num + 5)
                    .filter((num)=> num >70)

console.log(chainedNums);