function findFirstNonRepeatingCharacter(str) {
  // Create an object to store the character count
  const charCount = {};

  // Iterate over the string to count the occurrences of each character
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }

  // Iterate over the string again to find the first non-repeating character
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char] === 1) {
      return char;
    }
  }

  // If there are no non-repeating characters, return null
  return null;
}

// Example usage:
const str = "abacddbec";
const result = findFirstNonRepeatingCharacter(str);
console.log(result);  // Output: "e"
