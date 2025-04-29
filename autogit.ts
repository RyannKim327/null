function findFirstRepeatedCharacter(str: string): string | null {
    const seenCharacters = new Set<string>();

    for (const char of str) {
        // Check if the character is already in the set
        if (seenCharacters.has(char)) {
            return char; // Found the first repeated character
        }
        // Add the character to the set
        seenCharacters.add(char);
    }

    return null; // No repeated character found
}

// Example usage:
const exampleString = "abca";
const firstRepeatedChar = findFirstRepeatedCharacter(exampleString);
if (firstRepeatedChar) {
    console.log(`The first repeated character is: ${firstRepeatedChar}`);
} else {
    console.log("No repeated character found.");
}
