function firstNonRepeatingCharacter(s: string): string | null {
    const charCount: { [key: string]: number } = {};

    // Count occurrences of each character
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first non-repeating character
    for (let char of s) {
        if (charCount[char] === 1) {
            return char; // Return the first non-repeating character
        }
    }

    return null; // Return null if there is no non-repeating character
}

// Example usage
console.log(firstNonRepeatingCharacter("swiss")); // Output: "w"
console.log(firstNonRepeatingCharacter("repeattr")); // Output: "e"
console.log(firstNonRepeatingCharacter("aabbcc")); // Output: null
