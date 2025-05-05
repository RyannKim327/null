function firstRepeatedCharacter(str: string): string | null {
    const seenCharacters = new Set<string>();

    for (const char of str) {
        if (seenCharacters.has(char)) {
            return char; // return the first repeated character
        }
        seenCharacters.add(char); // add the character to the set
    }
    
    return null; // return null if there are no repeated characters
}

// Example usage:
const inputString = "abca";
const result = firstRepeatedCharacter(inputString);
console.log(result); // Output: "a"
