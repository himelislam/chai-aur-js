const randomNumber = Math.round(Math.random() * 100 + 1)
const previousGuess = [];
let guessRemeaning = 10;

const submitBtn = document.querySelector('#subt')

submitBtn.addEventListener('click', function(e){
    e.preventDefault()
    guessRemeaning = guessRemeaning - 1;

    let submitedValue = document.querySelector('#guessField');
    previousGuess.push(submitedValue.value)
    

    if(submitedValue === randomNumber){
        alert(`Hurray!! You have guessed the right Number ${randomNumber}`)
    }

    document.querySelector('.guesses').innerHTML = previousGuess.map((guess)=> guess)
    document.querySelector('.lastResult').innerHTML = guessRemeaning;

    submitedValue.value = '';
})