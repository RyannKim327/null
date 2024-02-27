function areAnagrams(str1, str2) {
  // Remove any non-word characters and convert the strings to lowercase
  const cleanStr1 = str1.replace(/[^\w]/g, '').toLowerCase();
  const cleanStr2 = str2.replace(/[^\w]/g, '').toLowerCase();

  // Check if the strings have equal length after cleaning
  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }

  // Create character count objects for both strings
  const charCount1 = {};
  const charCount2 = {};

  // Increment character counts for each string
  for (let char of cleanStr1) {
    charCount1[char] = (charCount1[char] || 0) + 1;
  }

  for (let char of cleanStr2) {
    charCount2[char] = (charCount2[char] || 0) + 1;
  }

  // Compare character counts
  for (let char in charCount1) {
    if (charCount1[char] !== charCount2[char]) {
      return false;
    }
  }

  return true;
}

// Test the function
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world")); // false
