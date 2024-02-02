function findFirstNonRepeatingCharacter(str) {
  // Create an object to store character frequencies
  let charCount = {};
  
  // Iterate through each character and update the frequencies
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    charCount[char] = (charCount[char] || 0) + 1;
  }
  
  // Iterate through the string again to find the first non-repeating character
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (charCount[char] === 1) {
      return char;
    }
  }
  
  // Return null if no non-repeating character is found
  return null;
}

// Example usage
console.log(findFirstNonRepeatingCharacter("hello")); // Output: "h"
console.log(findFirstNonRepeatingCharacter("javascript")); // Output: "v"
