function findFirstNonRepeatingCharacter(str) {
  const charCount = new Map();

  for (const char of str) {
    if (charCount.has(char)) {
      charCount.set(char, charCount.get(char) + 1);
    } else {
      charCount.set(char, 1);
    }
  }

  for (const [char, count] of charCount.entries()) {
    if (count === 1) {
      return char;
    }
  }

  return null; // If there are no non-repeating characters
}

// Usage example:
const input = "aabbccdeeff";
const firstNonRepeatingChar = findFirstNonRepeatingCharacter(input);
console.log(firstNonRepeatingChar); // Output: "d"
