function firstNonRepeatingChar(s: string): string | null {
  const charCount: Record<string, number> = {};

  // First pass: count characters
  for (const char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Second pass: find first character with count 1
  for (const char of s) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  // If no unique character found
  return null;
}

// Example usage:
console.log(firstNonRepeatingChar("swiss")); // Output: "w"
console.log(firstNonRepeatingChar("aabbcc")); // Output: null
