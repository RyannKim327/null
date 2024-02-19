function firstNonRepeatingChar(str) {
    const charMap = {};

    // Create a frequency map of characters
    for (let char of str) {
        charMap[char] = (charMap[char] || 0) + 1;
    }

    // Find the first character with frequency 1
    for (let char of str) {
        if (charMap[char] === 1) {
            return char;
        }
    }

    return null; // Return null if no non-repeating character is found
}

// Example
const input = "abacabad";
const result = firstNonRepeatingChar(input);
console.log(result); // Output: 'c'
