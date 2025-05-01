function findFirstRepeatedCharacter(str: string): string | null {
    const seenCharacters = new Set<string>();

    for (const char of str) {
        if (seenCharacters.has(char)) {
            return char; // Return the first repeated character
        }
        seenCharacters.add(char); // Add character to the set
    }

    return null; // Return null if no repeated character is found
}

// Example usage:
const inputString = "abcdabc";
const repeatedCharacter = findFirstRepeatedCharacter(inputString);
if (repeatedCharacter) {
    console.log(`The first repeated character is: ${repeatedCharacter}`);
} else {
    console.log("No repeated characters found.");
}
