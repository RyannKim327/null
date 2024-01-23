function areAnagrams(string1, string2) {
  // Remove non-alphabetic characters and spaces
  string1 = string1.replace(/[^A-Za-z]/g, "").toLowerCase();
  string2 = string2.replace(/[^A-Za-z]/g, "").toLowerCase();

  // Sort the strings
  string1 = string1.split('').sort().join('');
  string2 = string2.split('').sort().join('');

  // Compare the sorted strings
  return string1 === string2;
}

// Example usage
const word1 = 'listen';
const word2 = 'silent';
console.log(areAnagrams(word1, word2)); // Output: true
