let date = new Date();

// console.log(date);
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toISOString());
// console.log(date.toJSON());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString());
// console.log(date.toUTCString());

// let newDate = new Date(2024, 2, 25);
// let newDate = new Date("2026-03-31");
// let newDate = new Date("12-23-2333");
let newDate = new Date(2024, 2, 25,3,14);

// console.log(newDate.toDateString());
// console.log(newDate.toLocaleString());



// =====

let myTimeStamp = Date.now();

console.log(myTimeStamp);

console.log(newDate.getTime());
console.log(Math.floor(newDate.getTime()/1000));


let hello = newDate.toLocaleString('default', {
    weekday: "long"
});

console.log(hello);
console.log(newDate.toLocaleDateString());