/*
    JavaScript Methods
    A function defined within an object.
 */

// For example
const superHero = {
    name: "Spider-Man",
    webSwing: function () { // webSwing is a method
        console.log("Swinging by.");
    }
}

// accessing the function
superHero.webSwing();

/*
    this keyword
    It refers to the current instance of an object
 */

// adding a new method to show the usage of this keyword.

superHero.introduction = function () {
    console.log(`I'm the friendly neighborhood ${this.name}.`); // here, this refers to the superHero object
}

// accessing the function
superHero.introduction();



