function isAnagram(str1, str2) {
  // Remove whitespace and convert both strings to lowercase
  str1 = str1.replace(/\s/g, '').toLowerCase();
  str2 = str2.replace(/\s/g, '').toLowerCase();

  // If lengths are different, they cannot be anagrams
  if (str1.length !== str2.length) {
    return false;
  }

  // Sort the strings
  var sortedStr1 = str1.split('').sort().join('');
  var sortedStr2 = str2.split('').sort().join('');

  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}

// Example usage:
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false
