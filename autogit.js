function findFirstNonRepeatingChar(string) {
    const charCount = {};

    // Count the occurrences of each character
    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    }

    // Find the first non-repeating character
    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        if (charCount[char] === 1) {
            return char;
        }
    }

    // If no non-repeating characters found, return null or any default value you prefer
    return null;
}

// Example usage:
const string = "aabbcdee";
const firstNonRepeatingChar = findFirstNonRepeatingChar(string);
console.log(firstNonRepeatingChar); // Output: "c"
