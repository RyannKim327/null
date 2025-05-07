function firstRepeatedCharacter(input: string): string | null {
    const seenCharacters = new Set<string>();

    for (const char of input) {
        if (seenCharacters.has(char)) {
            return char; // First repeated character found
        }
        seenCharacters.add(char); // Add character to the set
    }

    return null; // No repeated characters found
}

// Example usage
const inputString = "abca";
const result = firstRepeatedCharacter(inputString);
console.log(result); // Output: "a"
