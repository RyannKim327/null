function findFirstNonRepeatingChar(str) {
    // Create an object to store the frequency of each character
    const charFrequency = {};

    // Iterate through the string and count the frequency of each character
    for (let char of str) {
        charFrequency[char] = (charFrequency[char] || 0) + 1;
    }

    // Iterate through the string again and find the first non-repeating character
    for (let char of str) {
        if (charFrequency[char] === 1) {
            return char;
        }
    }

    // If no non-repeating character is found, return null
    return null;
}

// Test the function
const str = "hello world";
const firstNonRepeatingChar = findFirstNonRepeatingChar(str);

console.log(`The first non-repeating character in "${str}" is "${firstNonRepeatingChar}"`);
