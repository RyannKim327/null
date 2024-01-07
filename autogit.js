function findFirstNonRepeatingCharacter(str) {
  const charCount = {};

  // Step 1: Update character count
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }

  // Step 2: Find first non-repeating character
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char] === 1) {
      return char;
    }
  }

  // Step 3: No non-repeating character found
  return null;
}

// Example usage:
const str = "abracadabra";
const firstNonRepeatingChar = findFirstNonRepeatingCharacter(str);
console.log(firstNonRepeatingChar); // Output: "b"
