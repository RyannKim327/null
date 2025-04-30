function firstNonRepeatingCharacter(str: string): string {
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

    return ""; // Return an empty string if no non-repeating character exists
}

// Example usage:
const input = "leetcode";
const result = firstNonRepeatingCharacter(input);
console.log(result); // Output: "l"
