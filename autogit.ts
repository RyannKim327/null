function firstNonRepeatingChar(str: string): string | null {
  const charCount: Record<string, number> = {};

  // Count frequency of each character
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first character with frequency 1
  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null;  // if no unique character found
}

// Example usage:
console.log(firstNonRepeatingChar("swiss")); // Output: "w"
console.log(firstNonRepeatingChar("redivider")); // Output: "v"
console.log(firstNonRepeatingChar("aabbcc")); // Output: null
