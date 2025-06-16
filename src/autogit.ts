function firstNonRepeatingChar(str: string): string | null {
    const charCount: Record<string, number> = {};

    // Count frequency of each character
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first character that appears only once
    for (const char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // If no such character exists, return null
    return null;
}

// Example usage:
console.log(firstNonRepeatingChar("swiss")); // Output: "w"
