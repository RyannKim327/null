function findFirstNonRepeatingChar(str) {
  // Step 1: Create an empty object
  const frequency = {};

  // Step 2: Update the frequency count for each character
  for (let char of str) {
    frequency[char] = frequency[char] ? frequency[char] + 1 : 1;
  }

  // Step 3: Find the first character with a frequency count of 1
  for (let char of str) {
    if (frequency[char] === 1) {
      return char;
    }
  }

  // Return null if there are no non-repeating characters
  return null;
}

// Example usage:
const input = "abacabad";
const firstNonRepeatingChar = findFirstNonRepeatingChar(input);
console.log(firstNonRepeatingChar); // Output: "c"
