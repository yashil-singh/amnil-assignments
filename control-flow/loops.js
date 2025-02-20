/**
 * Loops
 * A block of code that is executed multiple times util the given condition is met.
 * Can be stopped using 'break'.
 * Or, current iteration can be skipped using 'continue'.
 */

/**
 * for loop
 * Used to iterate over a block of code for a specified number of times.
 * Useful when the number of iterations needed is known.
 * First parameter: Initialization of a variable
 * Second parameter: Condition to check
 * Third parameter: Increment/Decrement of the variable
 */

// printing tasks
const tasks = ["Study", "Do laundry", "Buy groceries", "Practice guitar"];
for (let i = 0; i < tasks.length; i++) {
    console.log(`${i + 1}. `, tasks[i]);
}
// in this case, all the tasks in the array are printed

/**
 * while loop
 * Iterates over a block of code until the condition is true.
 * Useful for when the number of iterations needed is not known.
 * Condition is checked first before iterating the loop.
 */

// performing some tasks while energy is left
let energy = 100;
while (energy > 0) {
    console.log("Energy Left: ", energy);
    energy -= 20;
}
console.log("Energy Depleted.");
// in this case, Energy left is printed until the energy is 0

/**
 * do...while loop
 * Similar to while loop
 * The block of code is iterated once before checking the condition.
 * The block of code is executed once no matter what.
 */

// running until password is not correct
let password;
do {
    password = prompt("Enter Password: ");
} while (password !== "password")

console.log("Logged in");
//in this case, the loop is executed until correct password is entered

/**
 * break statement
 * Used to terminate the loop or conditional statement.
 * Mainly used to stop a loop
 */

// stopping a while loop
let a = 1;

while (a < 5) {
    if(a === 4) {
        break;
    }

    a += 1;
}
console.log(a);
// in this case, as soon as 'a' is 4, the while loop ends and 4 is printed

/**
 * continue statement
 * Used to skip the current iteration of the loop or conditional statement.
 */

// printing the multiples 3 up to 20
console.log("Multiples of 3");
for(let i = 1; i <= 20 ; ++i) {
    if(i % 3 !== 0) { // if not remainder 0
        continue;
    }
    console.log(i);
}

