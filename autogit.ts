function firstRepeatedChar(str: string): string | null {
  const seen = new Set<string>();
  for (const char of str) {
    if (seen.has(char)) {
      return char;
    }
    seen.add(char);
  }
  return null; // no repeated character found
}

// Example:
console.log(firstRepeatedChar("swiss")); // Output: "s"
console.log(firstRepeatedChar("abcdef")); // Output: null
