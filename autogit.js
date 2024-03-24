function firstNonRepeatingCharacter(str) {
    // Create a map to store the frequency of each character
    const charMap = new Map();
    
    // Iterate through the string to populate the charMap
    for (let char of str) {
        charMap.set(char, (charMap.get(char) || 0) + 1);
    }
    
    // Iterate through the string to find the first non-repeating character
    for (let char of str) {
        if (charMap.get(char) === 1) {
            return char;
        }
    }
    
    return null; // If there is no non-repeating character
}

// Test the function
const str = "hello world";
const firstNonRepeatingChar = firstNonRepeatingCharacter(str);

console.log("First non-repeating character:", firstNonRepeatingChar);
