function findFirstNonRepeatingChar(str) {
  // Create an empty object to store character frequencies
  const charCount = {};

  // Iterate through the string to count character frequencies
  for (let char of str) {
    // Increment the count for the character
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Iterate through the string to find the first non-repeating character
  for (let char of str) {
    // Check if the count for the character is 1
    if (charCount[char] === 1) {
      return char; // Return the first non-repeating character
    }
  }

  return null; // Return null if no non-repeating character is found
}

// Example usage
const str = "abacabad";
const firstNonRepeatingChar = findFirstNonRepeatingChar(str);
console.log(firstNonRepeatingChar); // Output: "c"
