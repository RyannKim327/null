function isAnagram(string1, string2) {
  // Remove any non-alphanumeric characters and convert to lowercase
  const cleanString1 = string1.toLowerCase().replace(/[^a-z0-9]/g, '');
  const cleanString2 = string2.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Return false if the lengths are different
  if (cleanString1.length !== cleanString2.length) {
    return false;
  }

  // Create character frequency objects for both strings
  const charFrequency1 = getCharFrequency(cleanString1);
  const charFrequency2 = getCharFrequency(cleanString2);

  // Compare the character frequencies
  for (const char in charFrequency1) {
    if (charFrequency1[char] !== charFrequency2[char]) {
      return false;
    }
  }

  // Strings are anagrams
  return true;
}

function getCharFrequency(str) {
  const frequency = {};

  for (const char of str) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  return frequency;
}

// Example usage
console.log(isAnagram('listen', 'silent'));  // Output: true
console.log(isAnagram('hello', 'world'));    // Output: false
console.log(isAnagram('rail safety', 'fairy tales'));  // Output: true
