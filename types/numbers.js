/*
    Numbers
    Represents numerical values
 */

let number = 11;
let decimalNumber = 11.11;
let negativeNumber = -11;

// NaN - A special value that is returned when mathematical operation cannot return a numeric value

console.log(Number("NUMBER")); // NaN

// infinity - An amount larger than any finite number

const infinity = 2 / 0;
console.log(infinity);

// Number Methods

// isNaN() - Checks if given expression is not a number
console.log(isNaN(infinity)); // false
console.log(isNaN("Hello")); // true

// parseFloat() - Converts to floating point number
console.log(parseFloat("11"));

// parseInt() - Converts integer
console.log(parseInt("11.1")); // 11

// toFixed() - Returns a string value for a number in fixed-point notation
console.log(decimalNumber.toFixed(1)); // 11.1

// toPresision() -
console.log(decimalNumber.toPrecision(3)); // 11.1

// toString() - Coverts to string
console.log(decimalNumber.toString()); // 11.11 (string)

// toLocaleString() - Returns language-sensitive representation of the given number.
let num = 400000;
console.log(
  num.toLocaleString("en-IN", {
    style: "currency",
    currency: "NPR",
  })
); // NPR 4,00,000
