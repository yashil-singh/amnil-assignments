/*
    Types of errors
    Syntax errors -> Any errors in the syntax
    Runtime errors -> Errors during the execution of the program
 */

/*
    try...catch...finally
    Used to handle expections (runtime errors)
*/

/*
    try {
        some tasks
    } catch (error) {
        tasks in case of error
    } finally {
        tasks that run anyway
    }
 */

// Example

const faultyFunction = () => {
  try {
    console.log("From try block before error.");
    console.log(a); // undeclared variable
    console.log("From try block after error."); // this line won't be reached
  } catch (error) {
    console.log("From catch block.");
    console.log(error.message); // a is not defined
  } finally {
    console.log("From finally block.");
  }
};

console.log("Faulty Function:");
faultyFunction();
console.log("");

const normalFunction = () => {
  try {
    console.log("From try block.");
  } catch (error) {
    console.log("From catch block.");
  } finally {
    console.log("From finally block.");
  }
};

console.log("Normal Function:");
normalFunction();
console.log("");

/*
    In the faulty function, the code till the error line will run and then go to the catch block
    In the normal function the code inside the catch block will not run as there are no errors
    In both cases the code inside finally block is running
 */

// using setTimeout

const timedFunction = () => {
  try {
    setTimeout(() => {
      console.log(a);
    }, 3000);
  } catch (error) {
    console.log("From catch block.");
  }
};

// timedFunction(); // causes error

// correct way
setTimeout(() => {
  try {
    console.log(a);
  } catch (error) {
    console.log("From catch block.");
  }
}, 3000);
