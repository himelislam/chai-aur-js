// random numbers between one to six

const randomNumber = Math.ceil(Math.random() * 6 )

// console.log(randomNumber);

let arr = [];
for (let index = 0; index < 50; index++) {
    const random = Math.ceil(Math.random() * 6 ) 
    arr.push(random)
}
console.log(arr);


