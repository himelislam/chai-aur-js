const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    const height = document.querySelector('#height').value
    const weight = document.querySelector('#weight').value
    const results = document.querySelector('#results')
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `<p>Please enter a valid height value</p>`
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `<p>Please enter a valid weight value</p>`
    } else {
        results.innerHTML = `<span>${bmi}</span>`
    }
})