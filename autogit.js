function findFirstNonRepeatingChar(str) {
  const charCount = {};
  
  // Count the frequency of each character
  for (let char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  
  // Find the first non-repeating character
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }
  
  // Return null if no non-repeating character is found
  return null;
}

// Example usage
const input = 'aabbcdeff';
const result = findFirstNonRepeatingChar(input);
console.log(result);  // Output: 'c'
