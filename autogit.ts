function firstNonRepeatingChar(str: string): string | null {
  const charCount: Record<string, number> = {};

  // Count occurrences of each character
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first character with a count of 1
  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  // If no non-repeating character, return null
  return null;
}
