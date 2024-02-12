function findNonRepeatingCharacter(str) {
  const charCount = {};

  // Count the occurrences of each character
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first non-repeating character
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null; // No non-repeating character found
}

// Example usage:
const str = "aabbcdd";
const firstNonRepeatingChar = findNonRepeatingCharacter(str);
console.log(firstNonRepeatingChar); // Output: "c"
