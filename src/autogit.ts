function firstNonRepeatingCharacter(input: string): string | null {
    // Create a map to store the frequency of each character
    const charCount = new Map<string, number>();

    // First pass: Count the frequency of each character
    for (const char of input) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    // Second pass: Find the first character with a count of 1
    for (const char of input) {
        if (charCount.get(char) === 1) {
            return char; // Return the first non-repeating character
        }
    }

    // If no non-repeating character is found, return null
    return null;
}

// Example usage:
const result = firstNonRepeatingCharacter("swiss");
console.log(result); // Output: "w"
console.log(firstNonRepeatingCharacter("swiss")); // Output: "w"
console.log(firstNonRepeatingCharacter("aabbcc")); // Output: null
console.log(firstNonRepeatingCharacter("abcdef")); // Output: "a"
console.log(firstNonRepeatingCharacter("")); // Output: null
