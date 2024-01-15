function findFirstNonRepeatingChar(str) {
  const charFrequency = {};

  // Build charFrequency object
  for (let char of str) {
    if (charFrequency[char]) {
      charFrequency[char]++;
    } else {
      charFrequency[char] = 1;
    }
  }

  // Find the first non-repeating character
  for (let char of str) {
    if (charFrequency[char] === 1) {
      return char;
    }
  }

  return undefined; // or an appropriate indicator value
}

// Example usage
const inputString = "hello";
const firstNonRepeatingChar = findFirstNonRepeatingChar(inputString);
console.log(firstNonRepeatingChar); // Output: "h"
