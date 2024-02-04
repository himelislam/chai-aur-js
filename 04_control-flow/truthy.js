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