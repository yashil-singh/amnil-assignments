/*
    Arrays
    A special type of object that can store multiple values in a single variable.
    Numbers, strings, objects, and even other arrays can be stored inside an array.
 */

// For example

// Array of strings
const videoGames = ["Spider-Man 2", "God of War: Ragnarok", "Ghost of Tsushima"];

// Array of numbers
const numbers = [10, 20, 30, 40, 50];

// Array of objects
const students = [{ id: 1, name: "Peter Parker" }, { id: 2, name: "Harry Osborn"}, { id: 3, name: "Marry Jane"}];

// Using new keyword
const routine = new Array("eat", "exercise", "sleep");

/*
    Accessing elements of an array
    Index is used to access elements of an array.
 */

console.log("Student on index 1:", students[1]);
console.log("Video Game on index 2", videoGames[2]);
console.log("Number on index 3:", numbers[3]);
console.log("Routine on index 0:", routine[0]);

/*
    Multi-Dimensional Array
    Arrays containing other arrays
 */

const multiDimensionalArray = [[1, 2, 3], [2, 4, 6], [1, 3, 5]];

console.log("MultiDimensionalArray:", multiDimensionalArray);

// Accessing elements of a Multi-Dimensional Array
console.log(multiDimensionalArray[0]); // [ 1, 2, 3 ]

console.log(multiDimensionalArray[1][0]); // 2

console.log(multiDimensionalArray[2][2]); // 5