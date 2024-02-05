// for each

const coding = ['js', 'ruby', 'php', 'c++', 'c#', 'cpp'];

coding.forEach((item)=>{
    // console.log(item);
})

function printMe(item){
    console.log(item);
}

// coding.forEach(printMe)

coding.forEach((item, index, arr)=>{
    // console.log(item, index, arr);
})

const myCoding = [
    {
        lang: "Php",
        langName: "php"
    },
    {
        lang: "Javascript",
        langName: "js"
    },
    {
        lang: "Python",
        langName: "py"
    }
]

myCoding.forEach((lang)=>{
    console.log(lang.langName);
})

