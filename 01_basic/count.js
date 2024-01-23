function myFunction (a, b){

    let count = 0;

    while (b.includes(a)) {
        count++
    }

    return b.split(a).length - 1;
}

console.log(myFunction('m', 'how many times does the character occur in this sentence?'));