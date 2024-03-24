function firstNonRepeatingCharacter(str) {
    const charCount = {};
    
    // Count the frequency of each character in the string
    for (let char of str) {
        charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    }
    
    // Find the first non-repeating character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    
    return null; // Return null if there are no non-repeating characters
}

// Example
const str = "hello world";
const firstNonRepeatingChar = firstNonRepeatingCharacter(str);
console.log("First non-repeating character:", firstNonRepeatingChar);
