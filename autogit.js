function findFirstNonRepeatingChar(str) {
  // Step 1: Create an empty object to store character counts
  const charCount = {};

  // Step 2: Iterate through the string to count characters
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  // Step 3: Iterate through the string again to find the first non-repeating character
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char] === 1) {
      return char;
    }
  }

  // Step 4: If no non-repeating character found, return null or an appropriate value
  return null;
}

// Example usage
const str = "abacabad";
const firstNonRepeatingChar = findFirstNonRepeatingChar(str);

console.log(firstNonRepeatingChar); // Output: 'c'
