function findFirstNonRepeatingCharacter(input: string): string | null {
    // Step 1: Create a Map to store character frequencies
    const charFrequency = new Map<string, number>();

    // Populate the Map with character frequencies
    for (const char of input) {
        charFrequency.set(char, (charFrequency.get(char) || 0) + 1);
    }

    // Step 2: Find the first character with a frequency of 1
    for (const char of input) {
        if (charFrequency.get(char) === 1) {
            return char; // Return the first non-repeating character
        }
    }

    // If no non-repeating character is found, return null
    return null;
}

// Example usage
const inputString = "swiss";
const result = findFirstNonRepeatingCharacter(inputString);

if (result !== null) {
    console.log(`The first non-repeating character is: ${result}`);
} else {
    console.log("No non-repeating character found.");
}
