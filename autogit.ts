function firstRepeatedChar(s: string): string | null {
  const seen = new Set<string>();
  for (const char of s) {
    if (seen.has(char)) {
      return char;
    }
    seen.add(char);
  }
  return null; // no repeated character found
}
console.log(firstRepeatedChar("swiss")); // Outputs: s
console.log(firstRepeatedChar("abcdef")); // Outputs: null
