// // steps for remembering the global execution context

// 1. for the global window it creates a global context; like app.js or index.js 
// 2. after that the memory allocation phase start like the variable, function, and the class gets allocated
// 3. for ex: var 1= undefined, function hello() gets the referrece {}
// 4. after that line by line the code gets executed for ex: the variable values gets injected. However, if we try to access the value before that 
//     we wiil gets the undefined value;
// 5. while executing the code line by line if there's any function occure it creates a new execution context and repeates all the task again.
// 6. after ending the child function done it immediately gets removed.
// 7. after that it continues executing codes with same approach. 
// 8. NOte the execusion phase are happening all call stack which function with the principal of last in first outerHeight. 
