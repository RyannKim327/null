function findFirstRepeatedChar(inputString) {
    const charMap = {};
    
    for (let char of inputString) {
        if (charMap[char]) {
            return char;
        } else {
            charMap[char] = true;
        }
    }
    
    return null; // If no repeated character is found
}

// Example usage
const inputString = "abcdebf";
const firstRepeatedChar = findFirstRepeatedChar(inputString);

if (firstRepeatedChar) {
    console.log(`The first repeated character is: ${firstRepeatedChar}`);
} else {
    console.log("No repeated character found in the string.");
}
