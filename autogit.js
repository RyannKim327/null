function findFirstNonRepeatingChar(str) {
  const charCount = {};
  
  // Count the occurrence of each character
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  
  // Find the first non-repeating character
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }
  
  return null; // Return null if no non-repeating character is found
}
const str = "aabbcde";
const firstNonRepeatingChar = findFirstNonRepeatingChar(str);
console.log(firstNonRepeatingChar); // Output: "c"
