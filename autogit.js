function firstNonRepeatingCharacter(str) {
    // Create an empty object to store the frequency of each character
    const charCounts = {};

    // Iterate over the characters in the string and count their occurrences
    for (let char of str) {
        charCounts[char] = (charCounts[char] || 0) + 1;
    }

    // Iterate over the characters again to find the first non-repeating character
    for (let char of str) {
        if (charCounts[char] === 1) {
            return char;
        }
    }

    // If no non-repeating character is found, return null
    return null;
}

// Test the function
console.log(firstNonRepeatingCharacter("leetcode")); // Output: "l"
