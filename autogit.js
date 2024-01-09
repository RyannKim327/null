function findFirstNonRepeatingChar(str) {
  const charCount = {}; // Object to store character counts

  // Count the occurrences of each character in the string
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

  return null; // Return null if there are no non-repeating characters
}

// Example usage:
const str = "abacabad";
const firstNonRepeatingChar = findFirstNonRepeatingChar(str);
console.log(firstNonRepeatingChar); // Output: "c"
