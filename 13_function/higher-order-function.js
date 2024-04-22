// higher order fucntion- takes function as a arguments

function map(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i]));
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5];
const doubled = map(numbers, function(num) {
    return num * 3;
});

console.log(doubled);

// returns a function

function multiplyBy(factor) {
    return function(num) {
        return num * factor;
    };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15


// Combination of Both:


function compose(f, g) {
    return function(x) {
        return f(g(x));
    };
}

function double(num) {
    return num * 2;
}

function increment(num) {
    return num + 1;
}

const doubleAndIncrement = compose(increment, double);
console.log(doubleAndIncrement(5)); // Output: 11
