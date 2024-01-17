function findFirstNonRepeatingChar(str) {
  const frequency = {};

  // Count the frequency of each character
  for (const char of str) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  // Find the first non-repeating character
  for (const char of str) {
    if (frequency[char] === 1) {
      return char;
    }
  }

  // No non-repeating character found
  return null;
}
const input = "abccddeffgghh";
const result = findFirstNonRepeatingChar(input);
console.log(result); // Output: "a"
