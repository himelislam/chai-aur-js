const myArr = [1,2,3,4,5,6];

// Array Methods

// myArr.push(8); // add on last
// myArr.pop(); // remove from last

// myArr.unshift(10); //insert on first index
// myArr.shift(); // remove from first index

// console.log(myArr.includes(2));
// console.log(myArr.indexOf(6));

// const newArr = myArr.join();
// console.log(newArr);


// // slice and splice

// console.log("A", myArr);

// console.log("slice",myArr.slice(1,3));


// console.log("splice", myArr.splice(1,3));

// console.log("B", myArr);


// ++++++++++++++++++++++ new +++++++++++++++++++++
// ---------------------------------------------------------------------------------------------

// push, pop, shift, unshift, from , includes, indexof, join, slice, splice, concat, flat, spread operator

// ---------------------------------------------------------------------------------------------

// push,

// const support = [1,2,3,4,5,6,7];
// let x = support.push(10); // includes in last of the array and retrun the new array length
// console.log(x) // [1, 2, 3,  4, 5, 6, 7, 10]

// pop

// const support = [1,2,3,4,5,6,7]
// support.pop()// removes the last element return the deleted value
// console.log(support.pop());

// shift

// const names = ['himel', 'tanvir', 'mahi', 'shatil'];
// console.log(names.shift()); // removes the first element and retuns the removed element
// console.log(names);

// unshift

// const names = ['himel', 'tanvir', 'mahi', 'shatil'];
// console.log(names.unshift('proma'));?// add a new value on the first index of the array and return the new array lenght
// console.log(names);

// from 

// const names = ['himel', 'tanvir', 'mahi', 'shatil'];
const hi = 'helllo'
const obj = {
    name : 'himel',
    id: 1234,
}

let obj2 = {
    name : 'himel',
    id: 1234,
}
// console.log(Array.from(names));
// console.log(Array.from(obj2));


// const newArray = [2,3,5,2,7,9,5]
// const newArray2 = [1,2,3,4,5,6,7,8,9]

// console.log(newArray.sort((x, y)=> y - x)) // 

// console.log(newArray[2]);
// console.log(newArray.at(2));

// splice

// // console.log(newArray2.splice(0, 3));
// console.log(newArray2.splice(0,2,11,12)); // kind of replace
// console.log(newArray2);

// fill

// console.log(newArray.fill(20));
// console.log(newArray);

// const newArrayDuplicate = [...newArray].fill('30');
// console.log(newArrayDuplicate);
// console.log(newArray);


// find

// console.log(newArray.find());
// console.log(newArray);

// const array1 = [5, 12, 8, 130, 44];
// const found = newArray.find((element) => element === 5); // need to explore more // returns the first found value
// console.log(found);

// indexof

// const names = ['himel', 'tanvir', 'mahi', 'shatil'];
// console.log(names.indexOf('tanvir'));



