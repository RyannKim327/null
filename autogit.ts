function firstRepeatedCharacter(str: string): string | null {
  const seen = new Set<string>();

  for (const char of str) {
    if (seen.has(char)) {
      return char;
    }
    seen.add(char);
  }

  return null; // No repeated characters found
}

// Example usage:
console.log(firstRepeatedCharacter("swiss")); // Outputs: "s"
console.log(firstRepeatedCharacter("abcdef")); // Outputs: null
