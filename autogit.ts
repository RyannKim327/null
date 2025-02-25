function firstNonRepeatingCharacter(s: string): string | null {
    const charCount: Map<string, number> = new Map();

    // Count the occurrences of each character
    for (const char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    // Find the first character that occurs only once
    for (const char of s) {
        if (charCount.get(char) === 1) {
            return char;
        }
    }

    // If no non-repeating character is found
    return null;
}

// Example usage:
const input = "swiss";
const result = firstNonRepeatingCharacter(input);
console.log(result); // Output: "w"
