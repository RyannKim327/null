function firstRepeatedCharacter(input: string): string | null {
    const seenCharacters = new Set<string>();

    for (const char of input) {
        if (seenCharacters.has(char)) {
            return char; // Return the first repeated character
        }
        seenCharacters.add(char);
    }

    return null; // Return null if no character is repeated
}

// Example usage:
const str = "aabbccdef";
const result = firstRepeatedCharacter(str);
console.log(result); // Output: 'a'
