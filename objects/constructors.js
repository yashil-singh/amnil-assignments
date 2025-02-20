/*
 Constructors Functions.
 Functions that create and initialize objects.
 Can be used to create multiple objects.
 Each object created are unique, hence, properties can be added to specific objects.
 */

// Example
function SuperHero (name, heroName) { // using parameters
    this.name = name;
    this.heroName = heroName;
    this.introduction = function () {
        console.log(`Hey, I'm ${this.name} and my superhero name is ${this.heroName}.`);
    }
}

const spiderMan = new SuperHero("Peter Parker", "Spider-Man");
spiderMan.introduction(); // Output: Hey, I'm Peter Parker and my superhero name is Spider-Man.

const ironMan = new SuperHero("Tony Stark", "Iron Man");
ironMan.introduction(); // Output: Hey, I'm Tony Stark and my superhero name is Iron Man.

/*
 Built-In Constructors
 There are various built-in constructors like:
 Object(), String(), Number(), Boolean(), Date()
 */

// Using Object() to create object
const batMan = new Object({ name: "Bruce Wyane", heroName: "Batman"});
console.log("Using Object():");
console.log(batMan);

// Using String()
const stringObject = new String("This is a string object created using String()");
console.log(stringObject);

// Using Number()
const numberObject = new Number(11);
console.log("Using Number():");
console.log(numberObject);

// Using Boolean()
const boolenObject = new Boolean("This is true.");
console.log("Using Boolean():");
console.log(boolenObject);

const dateObject = new Date();
console.log("Using Date():")
console.log(dateObject);

/*
 Object Prototypes
 Allows properties and methods to be shared among instances of the function or object
 Properties or methods added to the prototype of a constructor function are accessible to all objects derived from it.
 */

SuperHero.prototype.suitColors = ["red", "blue"]
SuperHero.prototype.describeSuit = function () {
    console.log(`I wear a suit with ${this.suitColors.join(", ")} colors.`)
}

// Accessing prototype function describeSuit using spiderMan object
console.log("Using spiderMan: ");
console.log(spiderMan.suitColors);
spiderMan.describeSuit();

// Accessing prototype function describeSuit using ironMan object
console.log("Using ironMan: ");
console.log(ironMan.suitColors);
ironMan.describeSuit();

// Getting prototype using Object.getPrototypeOf

console.log("Prototype of spiderMan:");
console.log(Object.getPrototypeOf(spiderMan));

console.log("Prototype of ironMan:");
console.log(Object.getPrototypeOf(ironMan));


