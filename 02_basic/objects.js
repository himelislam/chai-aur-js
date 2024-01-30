// objects are two types

// one: constructor -> singleton // Object.create 
// two: literals -> !singleton


const mySym = Symbol("key1")

const jsUser = {
    name: "himel",
    [mySym] : "myKey1",
    "full name" : "himle islam",
    age: 21,
    location: "Sylhet",
    email: "himel@test.com",
    isLoggedIn : false
}

// console.log(jsUser.name);
// console.log(["full name"]);
// console.log(typeof jsUser[mySym]);

jsUser.email = "himel@test2.com"
// Object.freeze(jsUser);
jsUser.email = "himel@test3.com"

jsUser.greeting = function (){
    console.log('kemcho??');
}

jsUser.greetingTwo = function (){
    console.log(`kemcho? ${this.name} ??`);
}

console.log(jsUser.greetingTwo());
console.log(jsUser.greeting());

// console.log(jsUser);




