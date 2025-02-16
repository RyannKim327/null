function firstNonRepeatingChar(str: string): string | null {
    const charCount = new Map<string, number>();

    // First pass: count the occurrences of each character
    for (const char of str) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    // Second pass: find the first character that occurs only once
    for (const char of str) {
        if (charCount.get(char) === 1) {
            return char;
        }
    }

    // If there is no non-repeating character, return null
    return null;
}

// Example usage
const str = "swiss";
console.log(firstNonRepeatingChar(str)); // Output: "w"
