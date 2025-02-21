/*
    Spread Operator
    Expands an iterable into individual elements.
    It provides values.
 */

// For example
const avengers = ["Iron Man", "Captain America", "Hulk"]
const guardiansOfTheGalaxy = ["Star Lord", "Groot", "Rocket"]

console.log("Combining avengers and guardiansOfTheGalaxy:")
const ultimateTeam = [...avengers, ...guardiansOfTheGalaxy];

console.log("Ultimate Team:")
console.log(ultimateTeam); // avengers and guardiansOfTheGalaxy are combined into one array.
console.log("");

/*
    Rest Operator
    Gathers multiple elements into one array.
    It stores values.
 */

// For example
const spiderManActions = ["Punch", "Shoot Webs", "Web Swing", "Web Zip"];

const [primaryAction, secondaryAction, ...others] = spiderManActions;

console.log("Spider-Man Actions:");
console.log("Primary Action:", primaryAction); // Punch
console.log("Secondary Action:", secondaryAction); // Shoot Webs
console.log("Other Actions:", others); // ['Web Swing', 'Web Zip']
console.log("");

// Using rest operator as function arguments
function avengersAssemble(leader, ...heros) {
    console.log(`${leader} leads the team!`);
    heros.forEach(hero => console.log(`${hero} joins the battle!`))
}

// passing in the avengers and guardiansOfTheGalaxy using spread operator
avengersAssemble("Captain America", ...avengers, ...guardiansOfTheGalaxy);
console.log("");

// adding fantastic 4
const fantasticFour =["Mr. Fantastic", "Human Torch", "Invisible Woman", "The Thing"];
console.log("After adding Fantastic 4:");
avengersAssemble("Captain America", ...avengers, ...guardiansOfTheGalaxy, ...fantasticFour);