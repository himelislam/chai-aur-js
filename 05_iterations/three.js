// For of loop

const numbers = [1,2,3,4,5,5,6,]

for (const num of numbers) {
    // console.log(num);
}

const greetings = "Hello World"

for (const greet of greetings) {
    if(greet == " "){
        // console.log("space found")
        continue
    }
    // console.log(`Each Word: ${greet}`);
}


// Maps

// new Map() => an object

const map = new Map();

map.set("BD", "Bangladesh")
map.set("IN", "India")
map.set("PAK", "Pakistan")

// console.log(map);

for (const [key, value] of map) {
    // console.log(`Key: ${key} and value: ${value}`);
}

const myObject = {
    'hello' : 'world',
    'hi' : 'haha'
}

for (const key of myObject) {
    console.log(key); // myObject is not iterable
}

