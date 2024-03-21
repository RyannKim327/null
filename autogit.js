function firstNonRepeatingCharacter(str) {
    let charCount = {};

    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null; // If no non-repeating character is found
}

// Example usage
const str = "hello world";
const firstNonRepeatingChar = firstNonRepeatingCharacter(str);
console.log("The first non-repeating character in the string is: " + firstNonRepeatingChar);
