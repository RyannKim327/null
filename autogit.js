function findFirstNonRepeatingChar(str) {
  // Step 1: Create an object to store character counts
  const charCount = {};
  
  // Step 2: Iterate through the string and count occurrence of each character
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }
  
  // Step 3: Iterate through the string and return the first character with count 1
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char] === 1) {
      return char;
    }
  }
  
  // If there are no non-repeating characters, return null or any other value as needed
  return null;
}

// Usage example:
const str = "abacabad";
const firstNonRepeatingChar = findFirstNonRepeatingChar(str);
console.log("First non-repeating character:", firstNonRepeatingChar);
