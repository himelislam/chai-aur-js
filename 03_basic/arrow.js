function himelOne(){
    const name = "Himel";
    console.log(this, "one");
    // console.log(this.fetch);
}

// himel()

const himelTwo = function(){
    const name = "Himel";
    console.log(this, "two");
    // console.log(this.fetch);
    // console.log(this.fetch);
}


const himelThree = () => {
    const name = "Himel"
    console.log(this , "three");
}
// himelOne()
// himelTwo()
// himelThree()

// const sum = (num1, num2) => num1 + num2 
// const sum = (num1, num2) => (num1 + num2) 
const returnObjInArrowFunction = () => ({username: "Himel"})

console.log(returnObjInArrowFunction());