function firstNonRepeatingCharacter(s: string): string | null {
    // Create a frequency map
    const charCount: { [key: string]: number } = {};

    // Count the occurrences of each character
    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first non-repeating character
    for (const char of s) {
        if (charCount[char] === 1) {
            return char; // Return the first non-repeating character
        }
    }

    return null; // Return null if no non-repeating character is found
}

// Example usage:
const result = firstNonRepeatingCharacter("swiss");
console.log(result); // Output: "w"
