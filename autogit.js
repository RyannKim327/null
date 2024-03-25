function firstNonRepeatingCharacter(str) {
    let charCount = {};
    
    // Count occurrences of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first non-repeating character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null; // Return null if no non-repeating character is found
}

// Test the function
let str = "aabbccdeeffg";
let result = firstNonRepeatingCharacter(str);
console.log(result); // Output: "d"
