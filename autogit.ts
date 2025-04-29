function firstNonRepeatingCharacter(input: string): string | null {
    const charCount: { [key: string]: number } = {};

    // Count the occurrences of each character
    for (const char of input) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first character with a count of 1
    for (const char of input) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // If no non-repeating character found, return null
    return null;
}

// Example usage:
const str = "swiss";
const result = firstNonRepeatingCharacter(str);
console.log(result); // Output: "w"
console.log(firstNonRepeatingCharacter("aabbcc")); // Outputs: null
console.log(firstNonRepeatingCharacter("apple")); // Outputs: "a"
console.log(firstNonRepeatingCharacter("stress")); // Outputs: "t"
