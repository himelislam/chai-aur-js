function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("M");
    console.log("E");
    console.log("L");
}

// sayMyName()

function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

console.log(addTwoNumbers(4, 6));

function loggedInUser(username) {
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
ß
}

function loggedInUserTwo(username = "You") {
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
ß
}

console.log(loggedInUserTwo());