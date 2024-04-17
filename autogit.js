function firstNonRepeatingCharacter(str) {
    let charCount = {};
    
    // Count the occurrences of each character in the string
    for (let char of str) {
        charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    }
    
    // Find the first non-repeating character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    
    // Return null if there is no non-repeating character
    return null;
}

// Test the function
const inputString = "aabccdeff";
const firstNonRepeatingChar = firstNonRepeatingCharacter(inputString);

console.log("First non-repeating character:", firstNonRepeatingChar);
