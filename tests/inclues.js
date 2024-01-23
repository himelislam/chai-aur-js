function myFunction(a, b) {
    if(a.includes(b)){
        return b + a
    }
    else {
        return a + b;
    }
}

console.log(myFunction(' think, therefore I am', 'I'));