// dom 
// first window object {
    // document
// }

// console.log(window); all the information
// console.log(document); only the html parts

// console.log(window.document); // documentes all information
// console.dir(document); documents all information


// document.getElementById('title')
// document.getElementsByClassName('heading')
// document.getElementById('title').getAttribute('heading')
// document.getElementById('title').setAttribute('class' , 'test')

const title = document.getElementById('title')
title.style.backgroundColor = 'green'
title.style.padding = '15px 15px'


title.textContent //// it will access all the content even with hidden contents
title.innerText // => only visible content will be accessible

title.innerHTML // it will access with all the html files within that node.

document.querySelector('h1') // only the first one will be accessed