function isAnagram(str1, str2) {
  // Remove any non-alphanumeric characters and convert to lowercase
  const cleanStr1 = str1.replace(/[^\w]/g, '').toLowerCase();
  const cleanStr2 = str2.replace(/[^\w]/g, '').toLowerCase();

  // Check if the lengths are different
  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }

  // Create character frequency objects for both strings
  const freq1 = {};
  const freq2 = {};

  // Populate character frequency objects
  for (let char of cleanStr1) {
    freq1[char] = (freq1[char] || 0) + 1;
  }

  for (let char of cleanStr2) {
    freq2[char] = (freq2[char] || 0) + 1;
  }

  // Compare character frequency objects
  for (let char in freq1) {
    if (freq1[char] !== freq2[char]) {
      return false;
    }
  }

  return true;
}

// Test the function
const string1 = "listen";
const string2 = "silent";
console.log(isAnagram(string1, string2)); // true
