function findFirstNonRepeatingChar(str) {
    const charMap = new Map();

    // Count the frequency of each character
    for (const char of str) {
        if (charMap.has(char)) {
            charMap.set(char, charMap.get(char) + 1);
        } else {
            charMap.set(char, 1);
        }
    }

    // Find the first non-repeating character
    for (const char of str) {
        if (charMap.get(char) === 1) {
            return char;
        }
    }

    // If no non-repeating character found, return null
    return null;
}

// Example usage
const str = "hello world";
const firstNonRepeatingChar = findFirstNonRepeatingChar(str);
console.log(firstNonRepeatingChar); // Output: "h"
