function firstNonRepeatingChar(str: string): string | null {
  const charCount = new Map<string, number>();

  // Count each character's occurrences
  for (const char of str) {
    charCount.set(char, (charCount.get(char) ?? 0) + 1);
  }

  // Find the first character with count 1
  for (const char of str) {
    if (charCount.get(char) === 1) {
      return char;
    }
  }

  return null; // No unique character found
}

// Example:
console.log(firstNonRepeatingChar("swiss")); // Output: "w"
console.log(firstNonRepeatingChar("aabbcc")); // Output: null
