function findFirstNonRepeatingCharacter(str) {
  const frequency = {}; // store character frequencies

  // loop through the string to update frequencies
  for (let char of str) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  // loop through the string to find the first non-repeating character
  for (let char of str) {
    if (frequency[char] === 1) {
      return char; // found the first non-repeating character
    }
  }

  return null; // no non-repeating character found
}

// Example usage:
const input = "abacddbec";
const firstNonRepeatingChar = findFirstNonRepeatingCharacter(input);

console.log(firstNonRepeatingChar); // Output: "e"
