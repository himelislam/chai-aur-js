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

console.log(vowelCounts('Heallo Bangladesh'));