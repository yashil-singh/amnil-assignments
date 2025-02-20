
// Functions
/**
 * Functions are reusable block of code that performs tasks.
 * Makes code cleaner and reusable.
 * Functions take input (parameters) and performs some task using them.
 */

// A basic example of function to add two numbers
function addFunction(a, b) { // a and b are arguments
    return a + b;
}

let a = 4;
let b = 5;

// Calling the function
const sumFunction = addFunction(a, b); // Assigning the value returned by add to sum

console.log(`${a} + ${b} = ${sumFunction}`);

/**
 * Arrow functions are a shorter way to write a function.
 * It removes the need for 'function' keyword.
 */

// Using same example
const addArrowFunction = (a, b) => a + b; // Directly returned

const sumArrowFunction = addArrowFunction(a, b);

console.log(`${a} + ${b} = ${sumArrowFunction}`);

// Both function and arrow function have the same output
