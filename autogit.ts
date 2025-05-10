function firstRepeatedCharacter(s: string): string | null {
  const seen = new Set<string>();

  for (const char of s) {
    if (seen.has(char)) {
      return char; // found the first repeated character
    }
    seen.add(char);
  }

  return null; // no repeated character found
}

// Example usage:
console.log(firstRepeatedCharacter("swiss")); // Output: "s"
console.log(firstRepeatedCharacter("abcde")); // Output: null
