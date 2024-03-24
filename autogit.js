function firstNonRepeatingCharacter(str) {
    // Create a frequency map of characters in the string
    const charMap = {};
    for (let char of str) {
        charMap[char] = (charMap[char] || 0) + 1;
    }

    // Find the first non-repeating character
    for (let char of str) {
        if (charMap[char] === 1) {
            return char;
        }
    }

    return null; // Return null if no non-repeating character is found
}

// Test the function
const str = "aabbccde";
const firstNonRepeatingChar = firstNonRepeatingCharacter(str);
console.log("First non-repeating character:", firstNonRepeatingChar);
