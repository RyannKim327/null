function firstNonRepeatingCharacter(str: string): string | null {
    const charCount: { [key: string]: number } = {};

    // Step 1: Count the frequency of each character
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Step 2: Find the first non-repeating character
    for (const char of str) {
        if (charCount[char] === 1) {
            return char; // Return the first non-repeating character
        }
    }

    // Return null if no non-repeating character is found
    return null;
}

// Example usage:
const input = "swiss";
const result = firstNonRepeatingCharacter(input);
console.log(result); // Output: "w"
