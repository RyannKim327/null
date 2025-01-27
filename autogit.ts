function firstNonRepeatingCharacter(str: string): string | null {
  const charCount: { [char: string]: number } = {};

  // Count the occurrences of each character
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  // Find the first non-repeating character
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null; // No non-repeating characters found
}
const str = "aabbcde";
const firstNonRepeatingChar = firstNonRepeatingCharacter(str);
console.log(firstNonRepeatingChar); // Output: "d"
