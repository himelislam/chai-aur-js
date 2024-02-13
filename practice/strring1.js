let x = "Ashfak Mahbub Mahi"

// chatAt, indexOf, subString, slice, trim, replace, split

        // console.log(x.charAt(4)); 

// charAt return kore position string...parameter hishabe position pass kora lage

        // console.log(x.indexOf("M"));
        // console.log(x.indexOf("c"));

// jodi multiple same value thake taile first jeita oitar index return korbe
// jodi value exists na kore taile -1 return kore

    // console.log(x.indexOf("M", 8))

// second parameter dara bujay kun index theke search kora shuru korbe

let varsity = "Leading Metropoliton University"

    // let answer = varsity.substring(2);
    // let answer = varsity.substring(2, 5);
    // console.log(answer);

// first parameter theke last parameter er ag porjonto return korbe ex- substring(2, 5) tahole return hobe index 2, 3, 4


    // console.log(varsity.slice(2, 5))

// same kaj kore substring er mto and return ou kore same but behaviour different

// difference btn subString and slice
// difference btn subString and slice

// substring o jodi first value boro and second value choto dei, taile swap kore; ex-> subString(12, 7) taile swap kore exact value ashbe index 7 to 11 
// slice o jodi value boro and second value choto dei, taile empty string return kor: ex-> slice(12, 7) return korbe empty string

// substring first value negative hole ekbare last index theke count kora shuru korbe, second value 

// function myFunction(a) {
//     return a.slice(0, a.length / 2);
//  }

const n = 'himel@gmail.com'
// trim
// includes
// splite
// replace


function myFunction(a, n){
    return a.charAt(n - 1)
}

// console.log(myFunction('abcd',1))

const himel  = '123456789'

// console.log(himel[2])

// removing last characters 
// slice(0,-3)

// console.log(himel.slice(4, -3)); // index 4 to last 3 index
// console.log(himel.slice(0,-3)); // index 0 to last 3 index
// console.log(himel.slice(2,5)); // index 2,3,4

function percentage(a,b){
    return (a / 100) * b 
}

console.log(percentage(100,50))

console.log(200/20);
