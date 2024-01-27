function findFirstNonRepeatingCharacter(str) {
  const charCount = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null;
}

// Example usage
const input = "hello";
const firstNonRepeatingChar = findFirstNonRepeatingCharacter(input);
console.log(firstNonRepeatingChar);  // Output: 'h'
