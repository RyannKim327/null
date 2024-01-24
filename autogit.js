function findFirstNonRepeatingChar(str) {
  // Create a frequency count object
  const charCount = {};

  // Count the occurrences of each character
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first character with a count of 1
  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  // If no unique character is found, return null or any other default value
  return null;
}
const str = "aabbccddeeffgghhijjkkll";

const firstNonRepeatingChar = findFirstNonRepeatingChar(str);

console.log(firstNonRepeatingChar); // Output: i
