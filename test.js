// function forLoop () {
//     const arrayOfNumebers = [1,2,3,4,5,6,7,5,4,3334,4,5,4,3,2];

//     let newArray = [];

//     for(i = 0; i < arrayOfNumebers.length; i++){
//        newArray = [...newArray, arrayOfNumebers[i] += 1];
//     }

//     return newArray;
// }

// console.log(forLoop());

function myFunction(a, b) {
    if(a.includes(b)){
        return b + a
    }
    else {
        return a + b;
    }
}

console.log(myFunction(' think, therefore I am', 'I'));