/**
 * JavaScript Library Functions
 * Built-in functions that can be used directly without creating them.
 * It includes Math, String, and Array library.
 */

/**
 * console.log()
 * This function prints something in the console.
 */

console.log("Hello world!"); // 'Hello world!' printed in the console

/**
 * Math Library Functions
 * Provides built-in functions for performing mathematical operations.
 * There is a long list of functions but some commonly used are:
 * max(), min(), sqrt(), pow(), ceil(), floor(), round(), trunc(), etc.
 */

// max() returns the largest value among the arguments
console.log(Math.max(10, 20, 30)); // Output: 30

// min() returns the smallest value among the arguments
console.log(Math.min(10, 20, 30)); // Output: 10

// sqrt() returns the square root of the given value
console.log(Math.sqrt(16)); // Output: 4

// pow() returns a number (first argument) raised to a certain (second argument) power
console.log(Math.pow(2, 3)); // Output: 8

// ceil() rounds a number up to the next largest integer
console.log(Math.ceil(300.10)); // Output: 301

// floor() rounds down a number to the next smallest integer
console.log(Math.floor(300.90)) // Output: 300

// round() returns the number rounded to the nearest integer
console.log(Math.round(300.10)); // Output: 300
console.log(Math.round(300.90)); // Output: 301

// trunc() returns the integer part of the given value
console.log(Math.trunc(300.50));

/**
 * String Library Functions
 * Provides functions to manipulate strings.
 * Commonly used functions are:
 * length, toUpperCase(), toLowerCase(), includes(), replace(), chatAt(), split(), trim(), slice(),
 * startsWith(), endsWith()
 */

let message = "Amnil Technologies";

// length returns the length of the string;
console.log("String length: " + message.length) // Output: 18

// toUpperCase() returns the uppercase version of the string
console.log(message.toUpperCase()); // Output: AMNIL TECHNOLOGIES

// toLowerCase() returns the lowercase version of the string
console.log(message.toLowerCase()); // Output: amnil technologies

// includes() checks if given string argument is inside the given string
console.log("Includes Amnil: " + message.includes("Amnil")); // Output: true
console.log("Includes JavaScript: " + message.includes("JavaScript")); // Output: false
console.log("Includes amnil: " + message.includes("amnil")); // Output: true, A and a are different

// replace() replaces a pattern and returns the new string;
console.log("Replacing Technologies: " + message.replace("Technologies", "Tech")); // Output: Amnil Tech

// charAt() returns the character at specified index of the string
console.log("Chat At 0 index: " + message.charAt(0)); // Output: A
console.log("Chat At 6 index: " + message.charAt(6)); // Output: T

// split() returns and with the string divided into list of substring according to the pattern
console.log("Splitting by whitespace: " + message.split(" ")) // Output: ["Amnil", "Technologies"] as it is split using empty space(' ')

// trim() removes whitespaces/empty spaces from both ends of the string
console.log("Trimming: " + "  Amnil Technologies  ".trim()); // Output: Amnil Technologies

// slice() extracts and returns a specified section of the string using index
console.log("Slicing from 0 to 5 index: " + message.slice(0, 5)) // Output: Amnil
console.log("Slicing from 6 to length of message: " + message.slice(6, message.length)) // Output: Technologies
// note: first argument is start and second is from where to exclude

/**
 * Array Library Functions
 * Provides functions for handling arrays
 * Commonly used functions are:
 * length, map(), some(), every(), reverse(), sort(), join(), pop(), push(), shift(), concat(),
 * find(), includes(), filter(),
 */

let array = [1, 2, 3, 4, 5];

// length returns the length of the array
console.log("Array length: " + array.length); // Output: 5

// map() returns a new array by mapping over all the elements in the array
console.log("Using Map: ")
array.map((item) => console.log(item)); // Output: 1 2 3 4 5

// some() checks if any element passes the given condition
console.log("Some Even numbers: " + array.some((item) => item % 2 === 0)); // Output: true

// every() checks if every element passes the given condition
console.log("All Even numbers: " + array.every((item) => item % 2 === 0)); // Output: false

// join() concatenates the array elements to a string
console.log("Joining array: " + array.join(" ")); // argument is a string to separate each pair of element of the array, (',') at default

// pop() removes and returns the last element of the array
console.log("First element: " + array.pop());

// sort() sorts the array in a given order
console.log(array.sort((a, b) => b -a )); // Output: [5, 4, 3, 2, 1] as given order is descending

// reverse() returns the array in reverse order
console.log(array.reverse()); // Output: [5, 4, 3, 2, 1]

// push() adds and elements to end of array & returns its length
console.log("Length: " + array.push(5, 6, 7)) // Output: 7

// shift() removes the first element and returns it
console.log("First Element: " + array.shift()); // Output: 1
console.log("First Element removed: " + array); // First element removed

// concat() returns a new array by merging given values or arrays
console.log(array.concat(8, 9, 10)) // Output: [2, 3, 4, 5, 6, 7, 8, 9, 10]

// find() returns the first element that satisfies a condition
console.log(array.find((item) => item * 5 === 25)); // Output: 5

// includes() checks if a value exists in an array
console.log("Includes 200: " + array.includes(200)); // Output: false

// filter() returns elements that satisfy the condition
console.log("Odd Elements: ");
console.log(array.filter((item) => item % 2 !== 0)); // Output: [3, 5, 7]