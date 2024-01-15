function findFirstNonRepeatingChar(str) {
    let charCount = {};

    // Count the occurrences of each character
    for (let char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    // Loop through the string again to find the first non-repeating character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // If no non-repeating character is found, return null
    return null;
}

// Example usage
const inputString = "abcdefab";
const firstNonRepeatingChar = findFirstNonRepeatingChar(inputString);
console.log(firstNonRepeatingChar); // Output: "c"
