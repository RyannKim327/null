function firstNonRepeatingChar(str) {
    let charMap = {};
    
    // Build a character map
    for (let char of str) {
        charMap[char] = (charMap[char] || 0) + 1;
    }
    
    // Find the first non-repeating character
    for (let char of str) {
        if (charMap[char] === 1) {
            return char;
        }
    }
    
    return null; // Return null if there is no non-repeating character
}

// Test the function
let inputString = "hello world";
let result = firstNonRepeatingChar(inputString);
console.log("First non-repeating character:", result);
