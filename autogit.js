function findFirstRepeatedChar(str) {
    // Create an empty set to store characters
    let charSet = new Set();

    // Iterate through the string
    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        // If character is already in the set, it is repeated
        if (charSet.has(char)) {
            return char;
        }

        // Add character to set
        charSet.add(char);
    }

    // If no repeated character found
    return null;
}

// Test the function
let str = "abca";
let repeatedChar = findFirstRepeatedChar(str);
console.log(repeatedChar); // Output: a
