function findFirstNonRepeatingCharacter(input: string): string | null {
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

// Example Usage
console.log(findFirstNonRepeatingCharacter("swiss")); // Output: "w"
console.log(findFirstNonRepeatingCharacter("aabbcc")); // Output: null
console.log(findFirstNonRepeatingCharacter("")); // Output: null
function findFirstNonRepeatingCharacter(input: string): string | null {
    for (const char of input) {
        if (input.indexOf(char) === input.lastIndexOf(char)) {
            return char;
        }
    }
    return null;
}
