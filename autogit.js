function findFirstNonRepeatingChar(str) {
  // Create an empty map to track the character occurrences
  const charCount = new Map();

  // Iterate over each character in the string and count their occurrences
  for (let char of str) {
    if (charCount.has(char)) {
      charCount.set(char, charCount.get(char) + 1);
    } else {
      charCount.set(char, 1);
    }
  }

  // Iterate over the characters again and find the first non-repeating character
  for (let char of str) {
    if (charCount.get(char) === 1) {
      return char;
    }
  }

  // If no non-repeating character is found, return null
  return null;
}

// Example usage
const inputString = "aabccdeff";
const firstNonRepeatingChar = findFirstNonRepeatingChar(inputString);
console.log(firstNonRepeatingChar); // Output: "b"
