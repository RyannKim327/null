function firstNonRepeatingCharacter(str: string): string | null {
  const charCount: { [key: string]: number } = {};

  // Count the occurrences of each character
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first character with a count of 1
  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  // Return null if there's no non-repeating character
  return null;
}
console.log(firstNonRepeatingCharacter("stress")); // Output: 't'
console.log(firstNonRepeatingCharacter("aabbcc")); // Output: null
