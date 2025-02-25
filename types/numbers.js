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

// isNan
console.log(isNaN(infinity)); // false
console.log(isNaN("Hello")); // true
