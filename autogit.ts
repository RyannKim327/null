function firstRepeatedCharacter(str: string): string | null {
    const seenChars = new Set<string>();

    for (const char of str) {
        if (seenChars.has(char)) {
            return char; // Return the first repeated character
        }
        seenChars.add(char); // Add the character to the set if it's not seen yet
    }

    return null; // Return null if there's no repeated character
}

// Example usage:
const result = firstRepeatedCharacter("swiss");
console.log(result); // Output: "s"
