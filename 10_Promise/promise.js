// fetch('https://api.github.com/users/himelislam').then().catch().finally()

const promiseOne = new Promise(function(resolve, reject){
     // Do an async task
     // DB calls, cryptography etc
     setTimeout(function(){
        // console.log("Promise One Async");
        resolve() // calling resolve method to connect it with the .then()
     },1000)
})

promiseOne.then(function(){
    // console.log('Promise one consumed');
})

// second one with no variable

new Promise(function(resolve, reject){
    setTimeout(function(){
        // console.log('Promise two Async');
        resolve()
    },1000)
}).then(function(){
    // console.log('Promise two consumed');
})

// third Promise

const thirdPromise = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({username: "Himel", Id: 12345})
    }, 1000);
})

thirdPromise.then(function(user){
    // console.log(user);
})

// fourth Promise

const fourthPromise = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({user: "himel", pass: 12344})
        }else{
            reject('Error: Something went wrong')
        }
    }, 1000);
})

fourthPromise.then((user)=>{
    return user.user;
}).then((username)=>{
    console.log('User Name:', username);
}).catch((err)=>{
    console.log(err);
})