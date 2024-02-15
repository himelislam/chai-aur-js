const randomNumber = Math.round(Math.random() * 100 + 1)
// const randomNumber = 40;
const previousGuess = [];
let guessRemeaning = 10;

const submitBtn = document.querySelector('#subt')

submitBtn.addEventListener('click', function(e){
    e.preventDefault()
    guessRemeaning--

    let submitedValue = document.querySelector('#guessField');
    previousGuess.push(submitedValue.value)
    
    // console.log( parseInt(submitedValue.value), randomNumber, "asdasd");

    if(parseInt(submitedValue.value) === randomNumber){
        alert(`Hurray!! You have guessed the right Number ${randomNumber}`)
    }

    document.querySelector('.guesses').innerHTML = previousGuess.map((guess)=> guess)
    // document.querySelector('.guesses').innerHTML = previousGuess[previousGuess.length - 1]
    document.querySelector('.lastResult').innerHTML = guessRemeaning;

    // previousGuess.length = -1;
    
    if(guessRemeaning === -1){
        alert('you have reached out the limit');
    }
    submitedValue.value = '';
})