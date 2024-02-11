const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body');
console.log(body);



buttons.forEach((btn) => {
    btn.addEventListener('click', function (e) {
        // console.log(btn.id);
        // console.log(e.target.id);
        // body.style.backgroundColor = 'grey'
        switch (btn.id) {
            case 'grey':
                body.style.backgroundColor = 'grey'
                break;
            case 'white':
                body.style.backgroundColor = 'white'
                break;
            case 'blue':
                body.style.backgroundColor = 'blue'
                break;
            case 'yellow':
                body.style.backgroundColor = 'yellow'
                break;
            default:
                body.style.backgroundColor = 'black'
                break;
        }
    })

})


