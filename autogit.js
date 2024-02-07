function findFirstNonRepeatingCharacter(str) {
  // Create an object to store the frequencies of each character
  const frequencies = {};

  // Iterate over each character in the string
  for (const char of str) {
    // Increment the frequency of the character, or initialize it to 1 if it doesn't exist yet
    frequencies[char] = frequencies[char] + 1 || 1;
  }

  // Iterate over each character in the string again
  for (const char of str) {
    // If the frequency of the character is 1, it is the first non-repeating character
    if (frequencies[char] === 1) {
      return char;
    }
  }

  // If there are no non-repeating characters, return null
  return null;
}
const str = "hello world";
const firstNonRepeatingChar = findFirstNonRepeatingCharacter(str);
console.log(firstNonRepeatingChar); // Output: 'h'
