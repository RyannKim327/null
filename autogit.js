function findFirstNonRepeatingCharacter(str) {
  let frequencyCounter = {};

  // Count the frequency of each character
  for (let char of str) {
    frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
  }

  // Find the first non-repeating character
  for (let char of str) {
    if (frequencyCounter[char] === 1) {
      return char;
    }
  }

  return null; // No non-repeating character found
}

// Example usage
const str = "aabcccdeff";
const firstNonRepeatingChar = findFirstNonRepeatingCharacter(str);
console.log(firstNonRepeatingChar); // Output: "b"
