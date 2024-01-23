// two types of memory in js
// stack and heap

// stack (primitive) and heap(non-primitive)

const countryName = "France"

let otherCountryName = countryName;
otherCountryName = "Bangladesh";

console.log(countryName); //France
console.log(otherCountryName); // Bangladesh

//primitive provide a copy of the main variable;

const userOne = {
    name : "User One",
    mail : "userone@mail.com"
}


const userTwo = userOne;

userTwo.name = "changed name"; // it changes the value of user one as it refer to the main memory

console.log(userOne);