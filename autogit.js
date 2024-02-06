function findFirstNonRepeatingCharacter(str) {
  // Step 1: Create an empty frequency object
  const frequency = {};

  // Step 2: Iterate to count character frequencies
  for (const char of str) {
    // Step 3: Increment or set count for each character
    frequency[char] = (frequency[char] || 0) + 1;
  }

  // Step 4: Iterate to find the first non-repeating character
  for (const char of str) {
    // Step 5: Check the count of each character
    if (frequency[char] === 1) {
      return char; // Found the first non-repeating character
    }
  }

  // Step 6: No non-repeating character found
  return null;
}

// Example usage
const inputString = "abacddbec";
const firstNonRepeatingChar = findFirstNonRepeatingCharacter(inputString);
console.log(firstNonRepeatingChar); // Output: 'e'
