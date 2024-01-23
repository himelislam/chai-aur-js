const myArr = [1,2,3,4,5,6];

// Array Methods

// myArr.push(8); // add on last
// myArr.pop(); // remove from last

// myArr.unshift(10); //insert on first index
// myArr.shift(); // remove from first index

// console.log(myArr.includes(2));
// console.log(myArr.indexOf(6));

const newArr = myArr.join();
console.log(newArr);


// slice and splice

console.log("A", myArr);

console.log("slice",myArr.slice(1,3));


console.log("splice", myArr.splice(1,3));

console.log("B", myArr);



