function wordMinimizer(input){
    if(typeof input == 'number'){
        return
    }
    if(typeof input == 'string' && input.length > 9){
        return input.charAt(0) + (input.length - 2) + input.charAt(input.length - 1)
    }else{
        return input;
    }
}


console.log(wordMinimizer(4));
console.log(wordMinimizer("word"));
console.log(wordMinimizer("localization"));
console.log(wordMinimizer("internationalization"));
console.log(wordMinimizer("pneumonoultramicroscopicsilicovolcanoconiosis"));
