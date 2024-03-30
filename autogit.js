function firstNonRepeatingCharacter(str) {
    // Create an object to store the count of each character
    let charCount = {};

    // Iterate through the string to count the occurrences of each character
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    }

    // Iterate through the string again to find the first non-repeating character
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (charCount[char] === 1) {
            return char;
        }
    }

    // If there is no non-repeating character, return null
    return null;
}

// Example
let str = "hello world";
let firstNonRepeatingChar = firstNonRepeatingCharacter(str);
console.log(firstNonRepeatingChar); // Output: "h"
