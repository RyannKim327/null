function findFirstRepeatedCharacter(input: string): string | null {
    // Create a Set to store characters we've seen
    const seenCharacters = new Set<string>();

    // Iterate through each character in the string
    for (const char of input) {
        // If the character is already in the Set, it's the first repeated character
        if (seenCharacters.has(char)) {
            return char;
        }
        // Otherwise, add the character to the Set
        seenCharacters.add(char);
    }

    // If no repeated character is found, return null
    return null;
}

// Example Usage
const result = findFirstRepeatedCharacter("programming");
console.log(result); // Output: "r"
function findFirstRepeatedCharacterCaseInsensitive(input: string): string | null {
    const seenCharacters = new Set<string>();
    const lowerCaseInput = input.toLowerCase();

    for (const char of lowerCaseInput) {
        if (seenCharacters.has(char)) {
            return char;
        }
        seenCharacters.add(char);
    }

    return null;
}

// Example Usage
const result = findFirstRepeatedCharacterCaseInsensitive("Programming");
console.log(result); // Output: "r"
