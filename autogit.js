function findFirstNonRepeatingCharacter(str) {
  const charCount = {};

  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null; // Return null if there are no non-repeating characters
}

// Example usage
const string = "abcaebdcefd";
const firstNonRepeatingChar = findFirstNonRepeatingCharacter(string);
console.log(firstNonRepeatingChar); // Output: "u"
