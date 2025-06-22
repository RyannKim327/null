function findFirstRepeatedCharacter(input: string): string | null {
    // Create a Set to track seen characters
    const seen = new Set<string>();

    // Iterate through each character in the string
    for (const char of input) {
        // Check if the character is already in the Set
        if (seen.has(char)) {
            return char; // Return the first repeated character
        }
        // Add the character to the Set
        seen.add(char);
    }

    // If no repeated character is found, return null
    return null;
}

// Example usage:
const result = findFirstRepeatedCharacter("hello");
console.log(result); // Output: "l"
