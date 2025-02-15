function firstRepeatedCharacter(str: string): string | null {
    const seen = new Set<string>();

    for (const char of str) {
        if (seen.has(char)) {
            return char; // Return the first repeated character
        }
        seen.add(char);
    }

    return null; // Return null if no character is repeated
}

// Example usage:
const input = "swiss";
const result = firstRepeatedCharacter(input);
console.log(result); // Output: 's'
