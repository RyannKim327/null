function findFirstRepeatedCharacter(str) {
    // Create an empty object to store the frequency of characters
    const charFrequency = {};

    // Iterate over each character in the string
    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        // If the character is already in the charFrequency object, we have found the first repeated character
        if (charFrequency[char]) {
            return char;
        }

        // Otherwise, update the frequency of the character in the charFrequency object
        charFrequency[char] = true;
    }

    // If no repeated character is found, return null or any other desired value
    return null;
}

// Example usage:
const inputString = "hello world!";
const firstRepeatedChar = findFirstRepeatedCharacter(inputString);
console.log(firstRepeatedChar);  // Output: "l"
