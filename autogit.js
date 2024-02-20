function firstNonRepeatingCharacter(str) {
    let charCount = {};

    // Count the occurrences of each character in the string
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first non-repeating character
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null; // Return null if no non-repeating character is found
}

// Test the function
const str = "hello world";
const firstNonRepeatingChar = firstNonRepeatingCharacter(str);
console.log(firstNonRepeatingChar);
