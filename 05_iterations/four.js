//for in

const obj = {
    'one' : 'first',
    'two' : 'second',
    'three': 'third',
    'four' : 'fth'
}

for (const key in obj) {
    // console.log(obj[key]);
}

// console.log(Object.keys(obj['four'])) // ['1','2','3']

const arr = ['hi', 'hello', 'how', 'are', 'you']

for (const key in arr) {
    console.log(arr[key]);
}


const map = new Map();

map.set("BD", "Bangladesh")
map.set("IN", "India")
map.set("PAK", "Pakistan")

for (const key in map) {
    console.log(key); // will not run cz => Map are not iterable
}

// for objects => for of loop
// for arrays => for in loop