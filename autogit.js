function findFirstNonRepeatingChar(str) {
  // Create an empty object to store character frequencies
  const charCount = {};

  // Iterate through each character in the string and count its occurrence
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

  // If no non-repeating character is found, return null
  return null;
}

// Example usage
const input = "abacabad";
const firstNonRepeatingChar = findFirstNonRepeatingChar(input);
console.log(firstNonRepeatingChar); // Output: "c"
