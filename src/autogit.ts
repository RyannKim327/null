function firstRepeatedCharacter(s: string): string | null {
    const seenChars = new Set<string>();

    for (const char of s) {
        // Check if the character has already been seen
        if (seenChars.has(char)) {
            return char; // Return the first repeated character
        }
        // Otherwise, add the character to the set
        seenChars.add(char);
    }

    // If no repeated character is found, return null
    return null;
}

// Example usage:
const inputString = "abcdefgabc";
const result = firstRepeatedCharacter(inputString);
console.log(result); // Output: "a"
