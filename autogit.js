function findFirstNonRepeatingChar(str) {
  // Create an empty object to store character counts
  const charCount = {};
  
  // Iterate over each character in the string and count its occurrences
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }
  
  // Find the first character that has a count of 1
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char] === 1) {
      return char;
    }
  }
  
  // If no non-repeating characters are found, return null
  return null;
}

// Testing the function
const inputString = "aabccdeff";
const result = findFirstNonRepeatingChar(inputString);
console.log(result); // Output: 'b'
