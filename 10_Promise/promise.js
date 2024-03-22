// fetch('https://api.github.com/users/himelislam').then().catch().finally()

const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // DB calls, cryptography etc
    setTimeout(function () {
        // console.log("Promise One Async");
        resolve() // calling resolve method to connect it with the .then()
    }, 1000)
})

promiseOne.then(function () {
    // console.log('Promise one consumed');
})

// second one with no variable

new Promise(function (resolve, reject) {
    setTimeout(function () {
        // console.log('Promise two Async');
        resolve()
    }, 1000)
}).then(function () {
    // console.log('Promise two consumed');
})

// third Promise

const thirdPromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({ username: "Himel", Id: 12345 })
    }, 1000);
})

thirdPromise.then(function (user) {
    // console.log(user);
})

// fourth Promise

const fourthPromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ user: "himel", pass: 12344 })
        } else {
            reject('Error: Something went wrong')
        }
    }, 1000);
})

fourthPromise.then((user) => {
    return user.user;
}).then((username) => {
    // console.log('User Name:', username);
}).catch((err) => {
    // console.log(err);
}).finally(() => {
    // console.log('The Promise is either resolved or rejected');
})


// Promise Five

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ user: "himel", pass: 12344 })
        } else {
            reject('Error: Something went wrong')
        }
    }, 1000);
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        // const data = await response.json();
        console.log(response, "hello");
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// sixth promise with async function with try catch

async function getMyInfo() {

    try {
        const url = 'https://api.github.com/users/himelislam'
        const response = await fetch(url);
        const data = await response.json()

        console.log(data);
    } catch (error) {
        console.log(error);
    }

};

// getMyInfo();


// Seventh promise with fetch and .then, .catch .finally

fetch('https://api.github.com/users/himelislam')
.then((res)=>{
    return res.json()
})
.then((data)=>{
    console.log(data, 'data from the fetch function');
})
.catch((err)=> console.log(err))
.finally(()=> console.log('Finally the fetch has completed and rejected'))
