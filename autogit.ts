function firstRepeatedChar(str: string): string | null {
  const seen = new Set<string>();

  for (const char of str) {
    if (seen.has(char)) {
      return char;
    }
    seen.add(char);
  }

  return null; // No repeated character found
}

// Example usage:
console.log(firstRepeatedChar("swiss")); // Output: s
console.log(firstRepeatedChar("abc"));   // Output: null
