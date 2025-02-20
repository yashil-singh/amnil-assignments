
/**
 * Comparison operators
 * These operators are used to compare two values and return a boolean value.
 */

/**
 * Equal to (==)
 * This operator checks if two values are equal
 * Returns true if equal.
 * It DOES NOT check the data type.
 */
console.log(5 == 10); // false as 5 and 10 are not equal

/**
 * Strict Equal to (===)
 * This operator also checks if two values are equal
 * Returns true if equal.
 * It DOES check the data type.
 */
console.log(8 === "8"); // false as types are different.

/**
 * Not Equal to (!=)
 * This operator checks if two values are not equal
 * Returns true if not equal.
 * It DOES NOT check the data type.
 */
console.log(21 != 10); // true as 21 and 10 are not equal

/**
 * Strict Not Equal to (!==)
 * This operator also checks if two values are not equal
 * Returns true if not equal.
 * It DOES check the data type.
 */
console.log("100" != 100); // false as types are different

/**
 * Greater than (>)
 * This operator checks if the value on the left is greater than the value on the right
 */
console.log(1 > 10); // false as 1 is smaller than 10

/**
 * Greater than or Equal to (>=)
 * This operator checks if the value on the left is greater than or equals to value on the right
 */
console.log(11 >= 11); // true as they are equal

/**
 * Smaller than (<)
 * This operator checks if the value on the left is smaller than the value on the right
 */

console.log(2000 < 5000); // true as 2000 is smaller than 5000

/**
 * Smaller than or Equal to (<=)
 * This operator checks if the value on the left is smaller than or equal to value on the right
 */
console.log(5000 <= 5000); // true as they are equal

