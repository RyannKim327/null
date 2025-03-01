function firstRepeatedCharacter(input: string): string | null {
    const seenCharacters = new Set<string>();

    for (const char of input) {
        if (seenCharacters.has(char)) {
            return char; // Return the first repeated character
        }
        seenCharacters.add(char); // Add the character to the set
    }

    return null; // Return null if no repeated character is found
}

// Example usage:
const result = firstRepeatedCharacter("asdfghejklaa");
console.log(result); // Output: 'a'
