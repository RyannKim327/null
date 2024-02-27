function firstNonRepeatingChar(str) {
    // Create a map to store the frequency of each character
    const charCount = new Map();

    // Iterate through the characters in the string and count their frequencies
    for (let char of str) {
        if (charCount.has(char)) {
            charCount.set(char, charCount.get(char) + 1);
        } else {
            charCount.set(char, 1);
        }
    }

    // Find the first non-repeating character
    for (let char of str) {
        if (charCount.get(char) === 1) {
            return char;
        }
    }

    return null; // return null if there is no non-repeating character
}

// Example usage
const str = "abacabad";
const firstNonRepeating = firstNonRepeatingChar(str);
console.log("First non-repeating character:", firstNonRepeating);
