function findFirstRepeatedCharacter(str: string): string | null {
    const seenCharacters = new Set<string>();

    for (const char of str) {
        if (seenCharacters.has(char)) {
            return char; // Return the first repeated character
        }
        seenCharacters.add(char);
    }

    return null; // If no repeated character is found
}

// Example usage:
const inputString = "hello world";
const result = findFirstRepeatedCharacter(inputString);
console.log(result); // Output: 'l'
