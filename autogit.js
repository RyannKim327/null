function isAnagram(str1, str2) {
  // Remove any non-word characters and convert to lowercase
  const cleanStr1 = str1.replace(/[^\w]/g, '').toLowerCase();
  const cleanStr2 = str2.replace(/[^\w]/g, '').toLowerCase();

  // If lengths differ, they can't be anagrams
  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }

  // Create frequency counters to track character occurrences
  const charCount1 = {};
  const charCount2 = {};

  // Count characters in str1
  for (let char of cleanStr1) {
    charCount1[char] = (charCount1[char] || 0) + 1;
  }

  // Count characters in str2
  for (let char of cleanStr2) {
    charCount2[char] = (charCount2[char] || 0) + 1;
  }

  // Compare character frequencies
  for (let char in charCount1) {
    if (charCount1[char] !== charCount2[char]) {
      return false;
    }
  }

  return true;
}

// Usage examples:
console.log(isAnagram('listen', 'silent'));  // true
console.log(isAnagram('hello', 'world'));    // false
console.log(isAnagram('debit card', 'bad credit')); // true
