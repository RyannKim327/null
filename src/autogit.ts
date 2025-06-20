function findFirstNonRepeatingCharacter(input: string): string | null {
    // Step 1: Create a map to store character frequencies
    const charFrequency = new Map<string, number>();

    // Populate the frequency map
    for (const char of input) {
        charFrequency.set(char, (charFrequency.get(char) || 0) + 1);
    }

    // Step 2: Find the first character with a frequency of 1
    for (const char of input) {
        if (charFrequency.get(char) === 1) {
            return char; // Return the first non-repeating character
        }
    }

    // Step 3: If no non-repeating character is found, return null
    return null;
}

// Example Usage
const testString = "swiss";
const result = findFirstNonRepeatingCharacter(testString);
console.log(`The first non-repeating character is: ${result}`);
console.log(findFirstNonRepeatingCharacter("swiss")); // Output: "w"
console.log(findFirstNonRepeatingCharacter("level")); // Output: "v"
console.log(findFirstNonRepeatingCharacter("aabbcc")); // Output: null
console.log(findFirstNonRepeatingCharacter("")); // Output: null
