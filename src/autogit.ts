function firstNonRepeatingCharacter(input: string): string | null {
    // Step 1: Create a map to store character frequencies
    const charFrequency = new Map<string, number>();

    // Step 2: Populate the map with character counts
    for (const char of input) {
        charFrequency.set(char, (charFrequency.get(char) || 0) + 1);
    }

    // Step 3: Find the first character with a frequency of 1
    for (const char of input) {
        if (charFrequency.get(char) === 1) {
            return char;
        }
    }

    // Step 4: If no non-repeating character is found, return null
    return null;
}

// Example usage
const testString = "swiss";
const result = firstNonRepeatingCharacter(testString);
console.log(`The first non-repeating character is: ${result}`);
console.log(firstNonRepeatingCharacter("swiss"));       // Output: "w"
console.log(firstNonRepeatingCharacter("aabbcc"));      // Output: null
console.log(firstNonRepeatingCharacter("aabbc"));       // Output: "c"
console.log(firstNonRepeatingCharacter(""));            // Output: null
console.log(firstNonRepeatingCharacter("abcABC"));      // Output: "a" (case-sensitive)
