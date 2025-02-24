// Adding elements

/*
    push()
    Adds element at the end of the array
 */
let food = ["pizza", "spaghetti"];

let foodItem = "burger";

console.log("Original array:", food);
food.push(foodItem);
console.log(`After adding ${foodItem}:`, food);

/*
    unshift()
    Adds element at the start of the array
 */

foodItem = "lasagna";
food.unshift(foodItem);
console.log(`After adding ${foodItem}:`, food);

// Removing elements

/*
    pop()
    Removes the last element
 */

food.pop();
console.log("After pop():", food);

/*
    shift()
    Removes the first element
 */

food.shift();
console.log("After shift():", food);

/*
    splice()
    Removes or replaces existing elements and/or adds new elements.
    Takes 3 arguments, starting index, number of elements, and what to add in place of removed items
 */

food.splice(2, 2, "fried chicken");
console.log(`After splice():`, food);

// Add Elements to a Multidimensional Array

const studentsData = [["Jack", 24], ["Sara", 23]];

// Using index notation
studentsData[2] = ["Harry", 25];
console.log(studentsData);

// Using push()
studentsData.push(["Peter", 24]);
console.log(studentsData);

// filter()
const dislikes = ["shawarma", "sandwich"];
food = ["pizza", "burger", "spaghetti", "shawarma", "sandwich"];
const filteredFoods = food.filter((foodItem) => !dislikes.includes(foodItem));
console.log(filteredFoods); // [ 'pizza', 'burger', 'spaghetti' ]

// find()
const users = [{ id: 1, name: "User 1"}, { id: 2, name: "User 2"}, { id: 3, name: "User 3"}];

const currentUserId = 2;
const currentUser = users.find((user) => user.id === currentUserId);

console.log(currentUser); // { id: 2, name: 'User 2' }

// Function to flatten a nested array
function flattenArray(array) {
    if(!Array.isArray(array)) return "Not an array";

    const flattenedArray = [];

    for(let i of array) {
        if (Array.isArray(i)) {
            for (let j of i) {
                flattenedArray.push(j);
            }
        } else {
            flattenedArray.push(i);
        }
    }

    return flattenedArray;
}

const nestedArray = [[10, 20], "string", [40, 50, 60]];

console.log("Nested Array:", nestedArray);
console.log("Flattened Array: ", flattenArray(nestedArray));

