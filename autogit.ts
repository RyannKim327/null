function firstRepeatedCharacter(str: string): string | null {
    const seenCharacters = new Set<string>();

    for (const char of str) {
        if (seenCharacters.has(char)) {
            return char; // Return the first repeated character
        }
        seenCharacters.add(char);
    }

    return null; // Return null if there are no repeated characters
}

// Example usage:
const result = firstRepeatedCharacter("abca");
console.log(result); // Output: "a"
