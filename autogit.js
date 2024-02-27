function findFirstNonRepeatingChar(str) {
    // Create an empty object to store character counts
    let charCount = {};

    // Loop through the string to count occurrences of each character
    for (let char of str) {
        // If the character is not in the charCount object, initialize its count to 1
        if (!charCount[char]) {
            charCount[char] = 1;
        } else {
            // Increment the count for the character
            charCount[char]++;
        }
    }

    // Loop through the string again to find the first non-repeating character
    for (let char of str) {
        if (charCount[char] === 1) {
            // Return the first non-repeating character
            return char;
        }
    }

    // If no non-repeating character is found, return null
    return null;
}

// Test the function
const inputString = "leetcode";
const result = findFirstNonRepeatingChar(inputString);
console.log(result); // Output: "l"
