const coding = ['js', 'ruby', 'php', 'c++', 'c#', 'cpp'];

const values = coding.forEach((item) => {
    // console.log(item);
})

// console.log(values);

// For each doesn't return anything

const valuesTwo = coding.map((item, index) => {
    return "hello " + item;
})

// console.log(valuesTwo);

// filter
const js = coding.filter((name, index) => {
    return index > 2;
})

const nums = [1, 2, 4, 5, 6, 7, 8, 9, 7, 6, 4, 3];

const newNums = [];

nums.forEach(num => {
    if (num > 4) {
        newNums.push(num)
    }
});


// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// const userBook = books.filter( (book) => book.genre === "History")
const userBook = books.filter( (book) => book.edition >= 2000 && book.genre === "History")

console.log(userBook);

