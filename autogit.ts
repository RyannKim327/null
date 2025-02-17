function firstNonRepeatingChar(s: string): string | null {
    const charCount: { [key: string]: number } = {};

    // First pass: Count the occurrences of each character
    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Second pass: Find the first non-repeating character
    for (const char of s) {
        if (charCount[char] === 1) {
            return char; // Return the first non-repeating character
        }
    }

    return null; // If no non-repeating character is found
}

// Example usage:
const inputString = "swiss";
const result = firstNonRepeatingChar(inputString);
console.log(result); // Output: "w"
