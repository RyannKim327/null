function firstNonRepeatingCharacter(s: string): string {
    const charCount: { [key: string]: number } = {};

    // Count occurrences of each character
    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first character that occurs once
    for (const char of s) {
        if (charCount[char] === 1) {
            return char; // Return the first non-repeating character
        }
    }

    return ''; // If no non-repeating character is found, return an empty string
}

// Example usage:
const input = "swiss";
const result = firstNonRepeatingCharacter(input);
console.log(result); // Output: "w"
