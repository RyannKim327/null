
function isAnagram(str1, str2) {
  // Remove spaces and convert to lowercase
  str1 = str1.replace(/ /g, '').toLowerCase();
  str2 = str2.replace(/ /g, '').toLowerCase();

  // Check if the lengths of the strings are equal
  if (str1.length !== str2.length) {
    return false;
  }

  // Create objects to store character frequency for each string
  let charFreq1 = {};
  let charFreq2 = {};

  // Count frequency of characters in str1
  for (let char of str1) {
    charFreq1[char] = (charFreq1[char] || 0) + 1;
  }

  // Count frequency of characters in str2
  for (let char of str2) {
    charFreq2[char] = (charFreq2[char] || 0) + 1;
  }

  // Compare character frequencies in both strings
  for (let key in charFreq1) {
    if (charFreq1[key] !== charFreq2[key]) {
      return false;
    }
  }

  return true;
}

// Test the function
console.log(isAnagram('listen', 'silent')); // Output: true
console.log(isAnagram('hello', 'world')); // Output: false

