function findFirstRepeatedChar(str) {
    let charMap = {};

    for (let i = 0; i < str.length; i++) {
        let currentChar = str[i];

        // Check if the character has already been encountered
        if (charMap[currentChar]) {
            return currentChar;
        } else {
            // Mark the character as encountered
            charMap[currentChar] = true;
        }
    }

    // Return null if no repeated character is found
    return null;
}

// Example usage
let inputString = "Hello World";
let firstRepeatedChar = findFirstRepeatedChar(inputString);

console.log(firstRepeatedChar);  // Output: 'l'
