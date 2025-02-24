function firstRepeatedCharacter(s: string): string | null {
    const charSet = new Set<string>();

    for (const char of s) {
        if (charSet.has(char)) {
            return char; // return the first repeated character
        }
        charSet.add(char);
    }

    return null; // return null if no repeated character is found
}

// Example usage
const inputString = "abca";
const result = firstRepeatedCharacter(inputString);
console.log(result); // Output: "a"
