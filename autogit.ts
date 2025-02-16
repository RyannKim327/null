function firstRepeatedCharacter(str: string): string | null {
    const seenCharacters = new Set<string>();

    for (const char of str) {
        if (seenCharacters.has(char)) {
            return char; // Returns the first repeated character
        }
        seenCharacters.add(char);
    }
    return null; // Returns null if there are no repeated characters
}

// Example Usage
const inputString = "swiss";
const result = firstRepeatedCharacter(inputString);
console.log(result); // Output: 's'
