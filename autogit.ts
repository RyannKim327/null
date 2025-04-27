function firstRepeatedCharacter(str: string): string | null {
  const seen = new Set<string>();

  for (const char of str) {
    if (seen.has(char)) {
      return char;
    }
    seen.add(char);
  }

  return null; // No repeated character found
}
console.log(firstRepeatedCharacter("abca")); // Output: 'a'
console.log(firstRepeatedCharacter("abcdef")); // Output: null
console.log(firstRepeatedCharacter("aabbcc")); // Output: 'a'
