
if(true){
    let a=10;
    const b=20;
    var c=30;
}

// console.log(a);
// console.log(b);
console.log(c); // only c returns from global scope

function one(){
    const name = "Himel"

    function two(){
        const website = "Youtube"
        console.log(name, " watches ", website);
    }
    two()
}

one()


function addOne(num){
    return num+1
}

addOne()

const addTwo = function(num){
    return num+1
}

addTwo()

const user = {
    username: "Himel",
    price: 123,
    welcomeMessage: function(){
        console.log(`${this.username} welcome here`);
        console.log(this);
    }

}

user.welcomeMessage();
user.username = "Fanku";
user.welcomeMessage();

console.log(this);

// this are only accessible on objects f.e: this.username