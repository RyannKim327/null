function firstNonRepeatingCharacter(str) {
    let charCount = {};
    
    // Count the occurrences of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // Find the first character with a count of 1
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    
    return null; // Return null if no non-repeating character is found
}

// Example usage
const str = "hello";
const firstNonRepeatingChar = firstNonRepeatingCharacter(str);
console.log(firstNonRepeatingChar); // Output: "h"
