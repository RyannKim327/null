function firstNonRepeatingCharacter(str) {
    let charMap = {};
    
    // Build character frequency map
    for(let char of str) {
        charMap[char] = (charMap[char] || 0) + 1;
    }
    
    // Find the first non-repeating character
    for(let char of str) {
        if(charMap[char] === 1) {
            return char;
        }
    }
    
    return null; // Return null if no non-repeating character found
}

// Example usage
const input = "abacddbeff";
const result = firstNonRepeatingCharacter(input);

if(result) {
    console.log("First non-repeating character:", result);
} else {
    console.log("No non-repeating character found.");
}
