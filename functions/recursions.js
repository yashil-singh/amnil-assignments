/**
 * A programming technique where a function calls itself repeatedly to solve a problem.
 */

// For example, find factorial of a number
function calculateFactorial(number) {
    if(number <= 1) return 1;

    return number * calculateFactorial(number - 1);
}

const number = -5;
const factorial = calculateFactorial(number);
console.log(`Factorial of ${number}: ${factorial}`); // Output: 120

// Example: Count vowels in a string
function countVowels(word, index = 0) {
    if(index === word.length) return 0;

    const vowels = "aeiou";
    const isVowel = vowels.includes(word[index].toLowerCase()) ? 1 : 0;

    return isVowel + countVowels(word, index + 1);
}

const word = "aeiourst";
console.log("No. of vowels: ", countVowels(word)); // Output: 5

function recursionCheck (count) {
    if(count === 0) return;

    recursionCheck(count - 1)
    console.log(`Recursion of ${count}`);
}

recursionCheck(5);