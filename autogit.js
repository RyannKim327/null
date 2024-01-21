function isAnagram(str1, str2) {
  // Remove white spaces and convert to lowercase
  str1 = str1.replace(/\s/g, '').toLowerCase();
  str2 = str2.replace(/\s/g, '').toLowerCase();

  // Check if the length of the strings is equal
  if (str1.length !== str2.length) {
    return false;
  }

  // Create character frequency maps for both strings
  const charCount1 = {};
  const charCount2 = {};

  for (let char of str1) {
    charCount1[char] = (charCount1[char] || 0) + 1;
  }

  for (let char of str2) {
    charCount2[char] = (charCount2[char] || 0) + 1;
  }

  // Check if the frequency of characters is the same in both maps
  for (let char in charCount1) {
    if (charCount1[char] !== charCount2[char]) {
      return false;
    }
  }

  return true;
}

// Example usage
console.log(isAnagram('listen', 'silent')); // Output: true
console.log(isAnagram('hello', 'hi'));      // Output: false
