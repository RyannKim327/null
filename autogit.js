function findFirstNonRepeatingChar(str) {
  const charCount = {};

  // Count the frequency of each character
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first non-repeating character
  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null; // No non-repeating character found
}

// Example usage:
const str = "leetcode";
const result = findFirstNonRepeatingChar(str);
console.log(result); // Outputs: "l"
