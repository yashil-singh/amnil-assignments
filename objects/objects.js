/*
    Objects
    A variable that can store multiple values in key-value pairs.
    Keys are the identifier.
    Values are the actual value itself.
 */

const superHero = {
    name: "Peter Parker", // Key: name, value: "Peter Parker"
    heroName: "Spider-Man" // Key: heroName, value: "Spider-Man"
}

console.log(superHero); // Output: { name: 'Peter Parker', heroName: 'Spider-Man' }

/*
    Accessing values using keys
    There are two ways: Using Dot Notation (.) and Bracket Notation ([ ])
 */

// Using Dot Notation
console.log(superHero.name); // Output: Peter Parker
console.log(superHero.heroName); // Output: Spider-Man

// Using Bracket Notation
console.log(superHero["name"]); // Output: Peter Parker
console.log(superHero["heroName"]); // Output: Spider-Man

/*
    Modifying object values.
    Values can be modified using keys.
 */

console.log("Before modifying:");
console.log(superHero);

// Modifying values using keys
superHero.name = "Tony Stark";
superHero.heroName = "Iron-Man";

console.log("After modifying:");
console.log(superHero);

/*
    Adding properties.
    Properties can be added by specifying a new key.
 */

// Adding 'suitColors' property
superHero.suitColors = ["red", "yellow"];

console.log("After adding property:");
console.log(superHero);

/*
    Deleting properties.
    Properties can be deleted by using the delete operator.
 */

// Deleting 'suitColors' property
delete superHero.suitColors;

console.log("After Deleting Property:");
console.log(superHero);




