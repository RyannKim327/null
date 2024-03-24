function firstNonRepeatingCharacter(str) {
    let charCount = {};
    
    // Count the frequency of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // Find the first non-repeating character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    
    return null; // Return null if there is no non-repeating character
}

// Test the function
let str = "aabbcde";
console.log(firstNonRepeatingCharacter(str)); // Output: "c"
