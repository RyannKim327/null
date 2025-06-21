function findFirstRepeatedCharacter(input: string): string | null {
    // A set to keep track of seen characters
    const seenChars = new Set<string>();

    // Iterate over each character in the string
    for (const char of input) {
        // Check if the character is already in the set
        if (seenChars.has(char)) {
            return char; // First repeated character found
        }
        // Add the character to the set
        seenChars.add(char);
    }

    // If no repeated character is found, return null
    return null;
}

// Example usage:
const testString = "programming";
const result = findFirstRepeatedCharacter(testString);

if (result !== null) {
    console.log(`The first repeated character is: ${result}`);
} else {
    console.log("No repeated character found.");
}
input = input.toLowerCase();
