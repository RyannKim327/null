function findFirstNonRepeatingChar(str) {
  // Create an object to store character frequencies
  let charFreq = {};

  // Iterate over each character in the string
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    
    // Increment the character frequency count
    charFreq[char] = charFreq[char] ? charFreq[char] + 1 : 1;
  }

  // Find the first character with frequency equals to 1
  for (let char in charFreq) {
    if (charFreq[char] === 1) {
      return char;
    }
  }

  // Return null if no non-repeating character found
  return null;
}

// Test the function
console.log(findFirstNonRepeatingChar("aabcccdeff")); // Output: "b"
console.log(findFirstNonRepeatingChar("hello")); // Output: "h"
console.log(findFirstNonRepeatingChar("aabbcc")); // Output: null (no non-repeating character)
