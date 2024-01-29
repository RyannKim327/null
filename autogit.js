function findFirstNonRepeatingCharacter(str) {
  // Create a frequency counter object
  const count = {};

  // Iterate over the string and count each character
  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }

  // Iterate over the string again and find the first character with count 1
  for (let char of str) {
    if (count[char] === 1) {
      return char;
    }
  }

  // Return null if no non-repeating character is found
  return null;
}
const str = "aabbcdeef";
const firstNonRepeatingChar = findFirstNonRepeatingCharacter(str);
console.log(firstNonRepeatingChar);  // Output: "c"
