function findFirstNonRepeatingChar(str) {
  // Step 1: Create an empty object to store character counts
  const charCounts = {};

  // Step 2: Iterate over the string and count occurrences
  for (const char of str) {
    if (charCounts[char]) {
      charCounts[char]++;
    } else {
      charCounts[char] = 1;
    }
  }

  // Step 3: Iterate over the string again and find the first non-repeating character
  for (const char of str) {
    if (charCounts[char] === 1) {
      return char;
    }
  }

  // If no non-repeating characters are found, return null or any appropriate value
  return null;
}

// Example usage
const str = "abccba";
const firstNonRepeatingChar = findFirstNonRepeatingChar(str);
console.log(firstNonRepeatingChar); // Output: "a"
