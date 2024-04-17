function firstNonRepeatingChar(str) {
    // Create an object to store character frequencies
    const charFreq = {};

    // Iterate through the string to count character frequencies
    for (let char of str) {
        charFreq[char] = (charFreq[char] || 0) + 1;
    }

    // Iterate through the string to find the first non-repeating character
    for (let char of str) {
        if (charFreq[char] === 1) {
            return char;
        }
    }

    return null; // Return null if no non-repeating character is found
}

// Test the function
const str = "aabbccde";
const firstNonRepeating = firstNonRepeatingChar(str);
console.log("First non-repeating character: " + firstNonRepeating);
