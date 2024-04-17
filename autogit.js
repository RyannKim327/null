function findFirstNonRepeatingCharacter(str) {
    let charCount = {};
  
    // Count the frequency of each character in the string
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

// Example usage
const str = "aabcccdeeffgh";
const firstNonRepeatingChar = findFirstNonRepeatingCharacter(str);

if (firstNonRepeatingChar) {
    console.log("The first non-repeating character is:", firstNonRepeatingChar);
} else {
    console.log("No non-repeating character found in the string.");
}
