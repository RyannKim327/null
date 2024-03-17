function firstNonRepeatingCharacter(str) {
    // Create a map to store the count of each character
    let charCount = {};

    // Iterate through the string to build the character count map
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first non-repeating character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // If no non-repeating character found, return null or an appropriate message
    return null;
}

// Test the function with a sample string
const str = "hello world";
const result = firstNonRepeatingCharacter(str);

console.log("First non-repeating character:", result);
