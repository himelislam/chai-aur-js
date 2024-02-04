const name = "dfghj";

if(name){
    console.log("truthhy");
}else{
    console.log('falsy');
}

// falsy values
// false, 0, -0, null, undifined, "", NaN, BigInt 0n 

// truthy values 

// "0", " ", "false", [], {}, function(){}
const arr = [];

if(arr.length === 0){
    console.log("Arr is empthy");
}

const obj = {};

if(Object.keys(obj).length === 0){
    console.log("Obj is empthy");
}

// false == 0 => true
// "" == false => true
// '' == 0 => true

// Nullish Coalesching Operator ?? only for null and undefined

let val1 = 5 ?? 10 // => 5
let val2 = null ?? 10 // => 10
let val3 = undefined ?? 10 // => 10
let val4 = null ?? 10 ?? 20 // => 10 will be asigned first stright value


// Terniary operator 

// condition ? true : false 

const price = 30;

price >= 50 ? console.log("More than 50") : console.log("Less than 50");
