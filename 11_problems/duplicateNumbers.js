const numbers = [1,2,3,4,5,6,3,2,2,2,3,44,2,2,33,4,5];

function findDuplicateNum(num){
    let duplicateNum = [];

    numbers.map((number)=>{
        if(duplicateNum.includes(number)){

        }
    })

    return Array.from(new Set(num))
}

console.log(findDuplicateNum(numbers));

// different approach

const duplicates = numbers.filter((value, index, array)=>{
    return array.indexOf(value) !== index;
})

console.log(duplicates);

// console.log(numbers);