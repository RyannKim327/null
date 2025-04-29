function firstNonRepeatingCharacter(str: string): string | null {
    const charCount: { [key: string]: number } = {};
    
    // First pass: Count the occurrences of each character
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Second pass: Find the first non-repeating character
    for (const char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null; // If there are no non-repeating characters
}

// Example usage:
const inputString = "swiss";
const result = firstNonRepeatingCharacter(inputString);
console.log(result); // Output: 'w'
