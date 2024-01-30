// objects are two types

// one: constructor -> singleton // Object.create 
// two: literals -> !singleton


const mySym = Symbol("key1")

const jsUser = {
    name: "himel",
    "full name" : "himle islam",
    age: 21,
    location: "Sylhet",
    email: "himel@test.com",
    isLoggedIn : false
}

console.log(jsUser.name);
console.log(["full name"]);
console.log(mySym);




