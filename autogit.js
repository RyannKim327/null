function findFirstRepeatedCharacter(str) {
    // Create an empty object to keep track of characters we have encountered
    let charMap = {};

    // Iterate through each character in the string
    for (let char of str) {
        // If the character is already in charMap, return it as the first repeated character
        if (charMap[char]) {
            return char;
        } else {
            // Otherwise, mark the character as encountered by adding it to charMap
            charMap[char] = true;
        }
    }

    // If no repeated character is found, return null
    return null;
}

// Test the function with a sample string
let str = "abcdeabcd";
let firstRepeatedChar = findFirstRepeatedCharacter(str);
console.log("The first repeated character is: " + firstRepeatedChar);
