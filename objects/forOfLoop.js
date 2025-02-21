/*
    for...of loop
    Loops over the actual values of an iterable like arrays, strings, Maps, Sets, etc.
 */

const superHeros = [{
    name: "Thor Odinson",
    heroName: "Thor",
    power: "Thunder"
}, {
    name: "Carol Danvers",
    heroName: "Captain Marvel",
    power: "Light"
}]

console.log("Using for...of loop:");
for(let value of superHeros) {
    console.log(`${value}`) // Output: [object] [object]
}

console.log("");

// To actually get the values of objects inside the superHeros
console.log("Using for...of loop paired with for...in loop:");
for(let value of superHeros) {
    for(let key in value) {
        console.log(`${key}: ${value[key]}`)
    }

    console.log("");
}

/*
    With this example we can see that for...of returns the actual values and is only used with iterables
    While for...in returns the key and used with objects
 */