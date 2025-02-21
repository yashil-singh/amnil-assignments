
const ironManSuit = {
    model: "Mark 50",
    powerSource: {
        type: "Arc Reactor",
        energy: "95%"
    }
}

console.log("Original suit: ");
console.log(ironManSuit);
console.log("")

/*
    Deep Copy
    Creates a completely independent clone, so nested objects are not shared.
 */

const nanotechSuit1 = JSON.parse(JSON.stringify(ironManSuit));
const nanotechSuit2 = structuredClone(ironManSuit);

nanotechSuit1.powerSource.type = "Nanotechnology"
nanotechSuit2.powerSource.type = "Nanotechnology"

console.log("Original ironManSuit after modifying deep copy:")
console.log(ironManSuit);
console.log("");

/*
    Shallow Copy
    Copies the reference to objects, meaning nested objects are shared.
 */

const superChargedSuit = { ...ironManSuit };

superChargedSuit.model = "Mark 200" // No change for originalSuit
superChargedSuit.powerSource.energy = "200%"; // Changes for originalSuit

console.log("Original suit after modifying shallow copy: ");
console.log(ironManSuit); // Original value for energy inside nested object is changed.

/*
    The key difference is that modifying a nested object in shallow copy with change the original object
    while in deep copy, it does not change the original object.
 */

