const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function vowelCounts(sentence){
    let count = 0;
    // let newArr = []

    for (const letter of sentence) {
        vowels.map((vowel)=>{
            if(vowel === letter){
                count ++;
                // newArr.push(vowel)
            }
        })
    }
    return count;
}

// console.log(vowelCounts('Heallo Bangladesh'));


// different solution

function vowelCountsTwo(sentence){
    let count = 0;
    const letters = Array.from(sentence);
    
    letters.forEach((letter)=>{
        if(vowels.includes(letter)){
            count++;
        }
    })
    return count;
}

console.log(vowelCountsTwo('Hello A E I O U'));