function firstRepeatedCharacter(s: string): string | null {
    const seen = new Set<string>();

    for (const char of s) {
        if (seen.has(char)) {
            return char; // Return the first repeated character found
        }
        seen.add(char); // Add the character to the set
    }

    return null; // Return null if no repeated character is found
}

// Example usage:
const input = "abcdefghabc";
const result = firstRepeatedCharacter(input);
console.log(result); // Output: "a"
