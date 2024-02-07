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

// const title = document.getElementById('title')
// title.style.backgroundColor = 'green'
// title.style.padding = '15px 15px'


title.textContent //// it will access all the content even with hidden contents
title.innerText // => only visible content will be accessible

title.innerHTML // it will access with all the html files within that node.

document.querySelector('h1') // only the first one will be accessed
document.querySelectorAll('h2')// returns all the nodes

document.querySelector('input[type="password"]')// for attributes
document.querySelector('p:first-child')// based on css selectors


// querySelectorAll provides Nodelists which only supports forEach for loop method
// for styling 

// only querySelector considers with return value of that html

const allListItems = document.querySelectorAll('li') // => Nodelists => forEach
allListItems[1].style.backgroundColor = 'green' // to access the Nodelists

const allListItem = document.getElementsByClassName('list-item') // HTMLCollection

// HTMLCollection to Array

const ArrOfHtmlCollection = Array.from(allListItem)

console.log(ArrOfHtmlCollection);

// NOTES

// querySelector = returns the html tag
// querySelectorAll =  returns nodelists => variable[1].styles => forEach
// getElementsByClassNames = returns HTMLCollections => variable[1] => no loop function
