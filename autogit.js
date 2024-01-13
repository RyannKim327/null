function areAnagrams(str1, str2) {
  // Remove any non-alphanumeric characters and convert to lowercase
  const cleanStr1 = str1.replace(/[^\w]/g, '').toLowerCase();
  const cleanStr2 = str2.replace(/[^\w]/g, '').toLowerCase();

  // Check if the lengths of the cleaned strings are equal
  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }

  // Build character frequency distributions
  const charFreq1 = {};
  const charFreq2 = {};

  for (let char of cleanStr1) {
    charFreq1[char] = (charFreq1[char] || 0) + 1;
  }

  for (let char of cleanStr2) {
    charFreq2[char] = (charFreq2[char] || 0) + 1;
  }

  // Compare character frequency distributions
  for (let char in charFreq1) {
    if (charFreq1[char] !== charFreq2[char]) {
      return false;
    }
  }

  return true;
}

// Example usage
const str1 = "listen";
const str2 = "silent";

console.log(areAnagrams(str1, str2)); // Output: true
