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

let name = "Kyrie Irving";
console.log(`Hello, my name is ${name}.`);

function log(content) {
  console.log(content);
}

// Accessing characters

// Using index
log(name[0]); // K

// charAt
log(name.charAt(0)); // K

// String Methods

// substring
log(name.substring(0, 1)); // K

// concat - joins two or more stings
log(name.concat(" ", "is my name", "."));

// replace - replaces specified patterns
log(name.replace("i", "a")); // Bobin

// split - splits the string into array
log(name.split()); // [ 'Kyrie Irving' ]
log(name.split(" ")); // [ 'Kyrie', 'Irving' ]

log(name.slice(0, 5)); // Kyrie

log(name.toUpperCase()); // KYRIE IRVING
log(name.toLowerCase()); // kyrie irving

log(name.includes("Irving")); // true
log(name.includes("Basketball")); // false

log(name.search("Irving")); // 1

// for...in

const string = "Basketball";

for (let s in string) {
  console.log(s); // prints index
}
