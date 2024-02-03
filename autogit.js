function findFirstNonRepeatingChar(str) {
  // Create an object to store character frequency
  const charCount = {};

  // Iterate over each character in the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    
    // Update the frequency count for the character
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first character with a frequency count of 1
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    
    if (charCount[char] === 1) {
      return char;
    }
  }

  // If there are no non-repeating characters, return null or an empty string
  return null;
}

// Example usage:
const str = "aabbccdeeff";
const result = findFirstNonRepeatingChar(str);
console.log(result); // Output: "d"
