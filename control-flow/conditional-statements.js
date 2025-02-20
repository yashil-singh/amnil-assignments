/**
 * Conditional statements are blocks of code that are executed based on the given condition.
 */

/**
 * if statement
 * Executes a block of code only if the condition is true.
 */

let age = 18;

// checking if user is eligible to vote
if(age >= 18) {
    console.log("You are eligible to vote.");
}
// in this case, the code inside the if statement is executed.

/**
 * if...else statement
 * An alternative block of code is executed if the condition is not ture.
 */

// using the same example for voting
age = 16;

if(age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}
// in this case, the code inside the else statement is executed.

/**
 * if...else if...else statement
 * Used for cases where there are multiple conditions.
 * Any number of conditions can be checked using else if.
 * else is the case where no conditions are true.
 */

// Checking the grade of a student
let score = 81;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}
// in this case, the grade is B.

/**
 * Nested if...else
 * These statements can be nested as well.
 */

// using the same example for the grade of a student
score = 98;

if (score >= 90) {
    if(score > 95) {
        console.log("Distinction");
    } else {
        console.log("Grade: A");
    }
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}
// in this case Distinction is printed

/**
 * switch case statement
 * Used when a variable can have multiple values.
 * Similar to else...if, but is cleaner.
 */

// checking the day of the week
let day = "Saturday";
switch (day) {
    case "Sunday":
        console.log("Start of the week.");
        break;
    case "Friday":
        console.log("Weekend is near!");
        break;
    case "Saturday":
        console.log("Weekend Time!");
        break;
    default:
        console.log("Just another day.");
}
// in this case, 'Weekend Time!' is printed.

/**
 * Ternary operator
 * Similar to if...else statement.
 * Could be referred to as inline-if...else statement.
 * If condition is true, first expression is executed, else second is executed.
 */

// checking user role
let userRole = "employee";

userRole === "admin" ? console.log("Redirect to admin dashboard") : console.log("Redirect to employee dashboard");

