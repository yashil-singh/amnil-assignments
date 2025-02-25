/*
    String
    A primitive data type that represents textual data.
    They are immutable, however can be reassigned when using let or var.
    They are case-sensitive.
*/

// Creating strings
"Hello"; // Single Quotes
"Hello"; // Double Quotes
`Hello`; // Backticks (Template Literals) - Can be used for inserting variables

let player = "Kyrie Irving";
console.log(`Hello, my name is ${player}.`);

function log(content) {
  console.log(content);
}

// Accessing characters

// Using index
log(player[0]); // K

// charAt
log(player.charAt(0)); // K

// String Methods

// substring
log(player.substring(0, 1)); // K

// concat - joins two or more stings
log(player.concat(" ", "is my name", "."));

// replace - replaces specified patterns
log(player.replace("i", "a")); // Bobin

// split - splits the string into array
log(player.split()); // [ 'Kyrie Irving' ]
log(player.split(" ")); // [ 'Kyrie', 'Irving' ]

log(player.slice(0, 5)); // Kyrie

log(player.toUpperCase()); // KYRIE IRVING
log(player.toLowerCase()); // kyrie irving

log(player.includes("Irving")); // true
log(player.includes("Basketball")); // false

log(player.search("Irving")); // 1

// for...in

const string = "Basketball";

for (let s in string) {
  console.log(s); // prints index
}
