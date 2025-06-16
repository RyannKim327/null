function firstNonRepeatingChar(str: string): string | null {
  const charCount: Record<string, number> = {};

  // Count the frequency of each character
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first character with a count of 1
  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null; // No non-repeating character found
}

// Example usage:
console.log(firstNonRepeatingChar("swiss")); // Output: w
