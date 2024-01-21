function findFirstNonRepeatingCharacter(inputString) {
    const chars = inputString.split('');
    const charCount = {};

    // Count the frequency of each character
    for (const char of chars) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first non-repeating character
    for (const char of chars) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // If no non-repeating character is found, return null or any meaningful value
    return null;
}

// Example usage
const input = 'hello world';
const firstNonRepeatingChar = findFirstNonRepeatingCharacter(input);
console.log(firstNonRepeatingChar);
