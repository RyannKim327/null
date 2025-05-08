function firstRepeatedCharacter(str: string): string | null {
    const seenCharacters = new Set<string>();

    for (const char of str) {
        if (seenCharacters.has(char)) {
            return char; // Return the first repeated character
        }
        seenCharacters.add(char); // Add character to Set
    }

    return null; // Return null if no repeated character is found
}

// Example usage:
const inputStr = "abcdeafgh";
const result = firstRepeatedCharacter(inputStr);
console.log(result); // Output: 'a'
