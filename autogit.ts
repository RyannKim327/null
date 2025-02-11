function firstRepeatedCharacter(s: string): string | null {
  const seenCharacters = new Set<string>();

  for (const char of s) {
    if (seenCharacters.has(char)) {
      return char; // Return the first repeated character
    }
    seenCharacters.add(char); // Add character to the set
  }

  return null; // If no repeated character found, return null
}

// Example usage:
const input = "abcdeaf";
const result = firstRepeatedCharacter(input);
console.log(result); // Output: "a"
