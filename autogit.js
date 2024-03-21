function firstNonRepeatingChar(str) {
    let charCount = {};
    
    // Count the frequency of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // Find the first non-repeating character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    
    return null; // If no non-repeating character is found
}

// Test the function
let str = "hello world";
console.log(firstNonRepeatingChar(str)); // Output: "h"
