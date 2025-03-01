function firstRepeatedCharacter(str: string): string | null {
  const seen = new Set<string>();

  for (const char of str) {
    // Check if the character has been seen before
    if (seen.has(char)) {
      return char; // Return the first repeated character
    }
    // If not, add it to the seen set
    seen.add(char);
  }

  // If no character is repeated, return null
  return null;
}

// Example usage:
const inputString = "abca";
const result = firstRepeatedCharacter(inputString);
console.log(result); // Output: 'a'
