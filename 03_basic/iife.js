// Immediately Invoked Function Expressions (IIFE)

(function himel(){
    // named IIFE
    console.log("Named IIFE");
})();

((name)=>{
    // umnamed IIFE
    console.log(`My name is ${name}`);
})("Himel")