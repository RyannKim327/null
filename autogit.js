function findFirstNonRepeatingChar(str) {
  const charCount = {};

  // Step 1: Count each character
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }

  // Step 2: Find the first non-repeating character
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char] === 1) {
      return char;
    }
  }

  // Step 3: Return null if no non-repeating character is found
  return null;
}

// Example usage
const str = "aabccdeff";
const firstNonRepeatingChar = findFirstNonRepeatingChar(str);
console.log(firstNonRepeatingChar); // Output: "b"
