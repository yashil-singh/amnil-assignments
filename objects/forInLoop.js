/*
    for...in loop
    Loops over the keys (property names) of an object
 */

const superHero = {
    name: "Thor Odinson",
    heroName: "Thor",
    power: "Thunder"
}

// Iterates over the keys
console.log("Using for...in loop:");
for (let key in superHero) {
    console.log(`${key}: ${superHero[key]}`) // using key to access the value from object
}

/*
    Output:
    name: Thor Odinson
    heroName: Thor
    power: Thunder
 */