function firstNonRepeatingCharacter(str: string): string | null {
    const charCount: { [key: string]: number } = {};

    // Count occurrences of each character
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first non-repeating character
    for (const char of str) {
        if (charCount[char] === 1) {
            return char; // Return the first non-repeating character
        }
    }

    return null; // Return null if there are no non-repeating characters
}

// Example usage
const input = "swiss";
const result = firstNonRepeatingCharacter(input);
console.log(result); // Output: "w"
