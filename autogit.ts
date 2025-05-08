function firstNonRepeatingChar(str: string): string | null {
  const charCount: Record<string, number> = {};

  // Count the occurrences of each character
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first character with count 1
  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null; // If no unique character is found
}
