function firstNonRepeatingCharacter(s: string): string | null {
    const charCount: { [key: string]: number } = {};

    // Count the occurrences of each character
    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first character with a count of 1
    for (const char of s) {
        if (charCount[char] === 1) {
            return char; // Return the first non-repeating character
        }
    }

    return null; // Return null if no non-repeating character is found
}

// Example usage:
const str = "swiss";
console.log(firstNonRepeatingCharacter(str)); // Output: "w"
