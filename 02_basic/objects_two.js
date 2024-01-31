// single ton

// const tinderUser = new Object();
const tinderUser = {}

tinderUser.id = 12343;
tinderUser.name = "Jhon"
tinderUser.emmail = "jhon@gmail.com"

const user = {
    name : "Himel",
    fullName : {
        userName : {
            firstName: "himel",
            lastName : "islam",
            location: {
                area : "Sylhet",
                country: "Bangladesh"
            }
        }
    }
}

// console.log(user?.fullName?.userName?.location?.country);


const obj1 = { 1:"a", 2:"b"}
const obj2 = { 3:"a", 4:"b"}
const obj3 = { 5:"a", 6:"b"}

const margedObj = Object.assign({}, obj1, obj2, obj3);

// console.log(margedObj);

const userDetails = [
    {
        id: 1,
        name : "he"
    },
    {
        id: 2,
        name : "he"
    },
    {
        id: 3,
        name : "heasdc"
    },
    {
        id: 4,
        name : "heasd123"
    },
    {
        id: 5,
        name : "he"
    }
]

// console.log(userDetails[3].name);

//important

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty("jhon@gmail.com"));