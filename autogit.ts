function firstNonRepeatingCharacter(s: string): string {
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

    return ""; // Return an empty string if there are no non-repeating characters
}

// Example usage
const inputString = "swiss";
const result = firstNonRepeatingCharacter(inputString);
console.log(result); // Output: "w"
