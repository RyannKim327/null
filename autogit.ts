function firstNonRepeatingChar(s: string): string | null {
  const charCount: { [key: string]: number } = {};

  // Count occurrences of each character
  for (const char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find first character with a count of 1
  for (const char of s) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null; // No non-repeating character found
}

// Example usage
console.log(firstNonRepeatingChar("swiss")); // Output: "w"
console.log(firstNonRepeatingChar("aabbcc")); // Output: null
