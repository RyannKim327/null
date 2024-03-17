function firstNonRepeatingCharacter(str) {
    let charMap = {};
    
    // Create a frequency map of characters in the string
    for (let char of str) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    
    // Find the first non-repeating character
    for (let char of str) {
        if (charMap[char] === 1) {
            return char;
        }
    }
    
    // Return null if no non-repeating character is found
    return null;
}

// Test the function
const str = "hello";
const firstNonRepeatingChar = firstNonRepeatingCharacter(str);
console.log(firstNonRepeatingChar);
