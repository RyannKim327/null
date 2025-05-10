function firstRepeatedCharacter(str: string): string | null {
    const seen = new Set<string>();

    for (const char of str) {
        if (seen.has(char)) {
            return char; // Found the first repeated character
        }
        seen.add(char);
    }

    return null; // No repeated character found
}

// Example usage:
console.log(firstRepeatedCharacter("swiss")); // Output: "s"
console.log(firstRepeatedCharacter("abcdef")); // Output: null
