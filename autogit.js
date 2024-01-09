function findFirstNonRepeatingChar(str) {
  // Create a character count object
  const charCount = {};

  // Count occurrences of each character in the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }

  // Find the first non-repeating character
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char] === 1) {
      return char;
    }
  }

  // Return null if there are no non-repeating characters
  return null;
}

// Example usage
const str = "abcdabcde";
const firstNonRepeatingChar = findFirstNonRepeatingChar(str);
console.log(firstNonRepeatingChar);  // Output: "e"
