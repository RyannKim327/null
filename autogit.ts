function firstRepeatedChar(str: string): string | null {
  const seen = new Set<string>();

  for (const char of str) {
    if (seen.has(char)) {
      return char;  // first repeated character found
    }
    seen.add(char);
  }

  return null;  // no repeated character found
}

// Example usage:
console.log(firstRepeatedChar("interview"));  // Output: "i"
console.log(firstRepeatedChar("abcdef"));     // Output: null
