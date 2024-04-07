// note any function that takes a function as a perameter and returns a function.

const radius = [2,3,4,5];

const area = (radius) =>{
    return Math.PI * radius * radius;
}

const circumference = (radius) =>{
    return 2 * Math.PI * radius;
}

const diameter = (radius) =>{
    return radius * radius;
}
// here this function taking the logic function as a peremeter and allowing to re-useing it for better.
const calculate = (radius, logic) => {
    let output = [];

    for(let i = 0; i < radius.length; i++){
        output.push(logic(radius[i]));
    }

    return output;
}

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));