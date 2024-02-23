function firstNonRepeatingCharacter(str) {
    let charCount = {};

    // Count frequency of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first non-repeating character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null; // Return null if no non-repeating character found
}

// Example usage
const str = "leetcode";
const result = firstNonRepeatingCharacter(str);
console.log(result); // Output: "l"
