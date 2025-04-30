function firstRepeatedCharacter(s: string): string | null {
    const seen = new Set<string>();

    for (const char of s) {
        if (seen.has(char)) {
            return char; // Return the first repeated character
        }
        seen.add(char); // Add the character to the set
    }

    return null; // Return null if no character is repeated
}

// Example usage:
const str = "abca";
const result = firstRepeatedCharacter(str);
console.log(result); // Output: 'a'
