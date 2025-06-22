function findFirstRepeatedCharacter(input: string): string | null {
    // A Set to store characters we've seen
    const seenCharacters = new Set<string>();

    // Iterate through each character in the string
    for (const char of input) {
        // Check if the character is already in the Set
        if (seenCharacters.has(char)) {
            return char; // First repeated character found
        }
        // Add the character to the Set
        seenCharacters.add(char);
    }

    // If no repeated character is found, return null
    return null;
}

// Example usage
const testString = "programming";
const firstRepeated = findFirstRepeatedCharacter(testString);
console.log(`The first repeated character is: ${firstRepeated}`);
