function firstNonRepeatingCharacter(str) {
    const charCount = {};
    
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    
    return null; // If there are no non-repeating characters
}

const str = "hello world";
const firstNonRepeatingChar = firstNonRepeatingCharacter(str);

console.log("First non-repeating character:", firstNonRepeatingChar);
