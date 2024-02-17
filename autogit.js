function firstNonRepeatingCharacter(str) {
    let charCount = {};
    
    // Count occurrences of each character
    for (let char of str) {
        charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    }
    
    // Find the first non-repeating character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    
    return null; // If no non-repeating character found
}

// Test the function
let inputString = "aabbccde";
let result = firstNonRepeatingCharacter(inputString);

if (result) {
    console.log("First non-repeating character is: " + result);
} else {
    console.log("No non-repeating character found");
}
