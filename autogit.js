function findFirstNonRepeatingChar(str) {
  // Create an object to store character count
  const charCount = {};

  // Iterate through the string and count each character
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }

  // Iterate through the object and find the first character with a count of 1
  for (let char in charCount) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  // If no non-repeating characters found, return null or any other desired value
  return null;
}

// Example usage
const input = "aabcbd";
const firstNonRepeatingChar = findFirstNonRepeatingChar(input);
console.log(firstNonRepeatingChar); // Output: 'c'
