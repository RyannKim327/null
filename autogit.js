function findFirstNonRepeatingChar(str) {
  // Create an empty object to store character frequencies
  let charMap = {};

  // Iterate over the string and count character occurrences
  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  // Iterate over the string again and find the first non-repeating character
  for (let char of str) {
    if (charMap[char] === 1) {
      return char;
    }
  }

  // If no non-repeating character is found, return null or any other value as desired
  return null;
}

// Usage Example
let input = "hello world";
let firstNonRepeatingChar = findFirstNonRepeatingChar(input);
console.log(firstNonRepeatingChar); // Output: "h"
