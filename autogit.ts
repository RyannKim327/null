function firstNonRepeatingChar(str: string): string | null {
  const charCount: { [key: string]: number } = {};

  // Count character frequencies
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first character with a count of 1
  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null; // If no unique character found
}

// Example usage:
const result = firstNonRepeatingChar("swiss");
console.log(result); // "w"
