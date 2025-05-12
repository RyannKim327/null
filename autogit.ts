function firstNonRepeatingChar(str: string): string | null {
  const charCount: Record<string, number> = {};

  // Count occurrences
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find first non-repeating char
  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null; // No non-repeating character found
}
console.log(firstNonRepeatingChar("swiss")); // Outputs: "w"
console.log(firstNonRepeatingChar("aabbcc")); // Outputs: null
