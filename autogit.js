function firstNonRepeatingChar(str) {
    // Create a map to store the frequency of each character
    const charCount = new Map();

    // Iterate through the string to count the frequency of each character
    for (let char of str) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    // Find the first non-repeating character in the string
    for (let char of str) {
        if (charCount.get(char) === 1) {
            return char;
        }
    }

    return null; // Return null if there are no non-repeating characters
}

// Test the function
const str = "hello";
const result = firstNonRepeatingChar(str);
console.log(result); // Output: "h"
