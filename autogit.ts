function firstNonRepeatingChar(str: string): string | null {
  const charCount: Record<string, number> = {};

  // Count frequency of each character
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first character with a frequency of 1
  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  // If no unique character found
  return null;
}

// Example
console.log(firstNonRepeatingChar("swiss")); // Output: "w"
