/*
    Accessor Properties
    Methods that get or set the value of an object.
    Two keywords are use: get and set
 */

/*
    get
    Used to define a method to get property value
 */

// For example
const superHero = {
    name: "Steve Rogers",
    heroName: "Captain America",
    get getRealName() {
        return this.name;
    },
    get getHeroName() {
        return this.heroName;
    }
}

// Should not be accessed as a method
console.log("Real Name:", superHero.getRealName);
console.log("Superhero Name:", superHero.getHeroName);

/*
    set
    Used to change the value of an object.
 */

// For example
const superHero2 = {
    name: "Bucky Barnes",
    heroName: "Winter Soldier",
    set changeName(name) {
        this.name = name;
    },
    set changeHeroName(heroName) {
        this.heroName = heroName;
    },
}

console.log("Before Change:")
console.log(superHero2.name);
console.log(superHero2.heroName);

// Not to be used as a function
superHero2.changeName = "Bruce Banner";
superHero2.changeHeroName = "Hulk";

console.log("After Change:")
console.log(superHero2.name);
console.log(superHero2.heroName);

/*
    Object.defineProperty()
    Another way to define getters and setters.
    It takes in three arguments:
    -> First is the object name.
    -> Second is the name of the property
    -> Third is the object that describes the property
 */

// For example

const superHero3 = {
    name: "Wade Wilson",
    heroName: "Deadpool"
}

// Getters
Object.defineProperty(superHero3, "getRealName", {
    get: function () {
        return this.name;
    }
});
Object.defineProperty(superHero3, "getHeroName", {
    get: function () {
        return this.heroName;
    }
});

// Setters
Object.defineProperty(superHero3, "changeRealName", {
    set: function (name) {
        this.name = name;
    }
});
Object.defineProperty(superHero3, "changeHeroName", {
    set: function (heroName) {
        this.heroName = heroName;
    }
});

console.log("Before Change:");
console.log(superHero3.getRealName);
console.log(superHero3.getHeroName);

superHero3.changeRealName = "Logan";
superHero3.changeHeroName = "Wolverine";

console.log("After Change:");
console.log(superHero3.getRealName);
console.log(superHero3.getHeroName);



