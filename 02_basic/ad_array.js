const marvelHeros = ["thor", "spiderman", "ironman"];
const dcHeros = ["superman", "flash", "batman"];

// marvelHeros.push(dcHeros)
// console.log(marvelHeros[3][1]);

// const newHeros = marvelHeros.concat(dcHeros);
// console.log(newHeros);

const newAllHeros = [...marvelHeros, ...dcHeros];

// console.log(newAllHeros);

const anotherArray = [1,2,3,4,[3,4,5],[3,4,[23,4,5,5,12,[5,8,9,6]]]];
console.log(anotherArray.flat(Infinity));

console.log(Array.isArray("himel"));
console.log(Array.from("himel"));
console.log(Array.from({
    name: "himel"
})); // interesting as we have to provide instruction for choosing the key or value as element of the array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3))