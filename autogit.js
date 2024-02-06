function findFirstNonRepeatingChar(str) {
  const charFreq = {};

  // Count character frequencies
  for (const char of str) {
    charFreq[char] = (charFreq[char] || 0) + 1;
  }

  // Find first non-repeating character
  for (const char of str) {
    if (charFreq[char] === 1) {
      return char;
    }
  }

  return null; // No non-repeating character found
}
console.log(findFirstNonRepeatingChar('aabccd')); // Output: "b"
console.log(findFirstNonRepeatingChar('aabbcc')); // Output: "c"
console.log(findFirstNonRepeatingChar('aabb'));   // Output: null
