function findFirstNonRepeatingChar(str) {
  // Create a hashmap to store the frequency of each character
  const frequencies = {};

  // Iterate through the string and update the hashmap
  for (let char of str) {
    frequencies[char] = (frequencies[char] || 0) + 1;
  }

  // Iterate through the string again to find the first non-repeating character
  for (let char of str) {
    if (frequencies[char] === 1) {
      return char;
    }
  }

  // If no non-repeating character is found, return null
  return null;
}

// Example usage
const input = "abccadbe";
const result = findFirstNonRepeatingChar(input);
console.log(result); // Output: "b"
