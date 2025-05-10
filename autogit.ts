function firstRepeatedCharacter(str: string): string | null {
    const seenChars: Set<string> = new Set();

    for (const char of str) {
        if (seenChars.has(char)) {
            return char; // Return the first repeated character
        }
        seenChars.add(char); // Add the character to the set
    }

    return null; // Return null if no repeated character is found
}

// Example usage
const input = "abcdefga";
const result = firstRepeatedCharacter(input);
if (result) {
    console.log(`The first repeated character is: '${result}'`);
} else {
    console.log("No repeated characters found.");
}
