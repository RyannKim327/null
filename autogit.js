function findFirstRepeatedChar(str) {
    let charCount = {};
  
    // Count the occurrences of each character in the string
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
      
        // If a character is repeated, return it as the result
        if (charCount[char] > 1) {
            return char;
        }
    }
  
    // If no repeated character is found, return null
    return null;
}

// Example usage
const str = "hello world";
const repeatedChar = findFirstRepeatedChar(str);
console.log(repeatedChar); // Output: "l"
