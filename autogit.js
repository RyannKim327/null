function firstNonRepeatingCharacter(str) {
    // Create a map to store the frequency of each character
    const charCount = new Map();
    
    // Count the frequency of each character
    for (let char of str) {
        if (charCount.has(char)) {
            charCount.set(char, charCount.get(char) + 1);
        } else {
            charCount.set(char, 1);
        }
    }
    
    // Find the first non-repeating character
    for (let char of str) {
        if (charCount.get(char) === 1) {
            return char;
        }
    }
    
    // If no non-repeating character is found, return null
    return null;
}

// Example usage
const str = "aabbccde";
const firstNonRepeating = firstNonRepeatingCharacter(str);
console.log(firstNonRepeating);
