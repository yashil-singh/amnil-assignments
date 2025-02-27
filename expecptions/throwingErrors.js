/*
    throw
    This key word is similar to return but can be used to throw a user defined error
 */

// example

const throwingError = () => {
  try {
    console.log("Before error.");
    throw new Error("This is the error message");
    console.log("After error."); // not reached
  } catch (error) {
    console.log("Error:", error.message);
    console.log("From catch block");
  }
};

throwingError();

/*
  Built-in error constructors
  TypeError, SyntaxError, ReferenceError, EvalError, InternalError, and RangeError
 */
