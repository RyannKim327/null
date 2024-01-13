function isAnagram(str1, str2) {
  // Convert to lowercase and remove non-alphanumeric characters
  str1 = str1.toLowerCase().replace(/[^a-z0-9]/g, '');
  str2 = str2.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Check if the lengths match
  if (str1.length !== str2.length) {
    return false;
  }

  // Convert strings to sorted arrays and join back into strings
  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');

  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}

// Example usage
console.log(isAnagram('listen', 'silent')); // true
console.log(isAnagram('rail safety', 'fairy tales')); // true
console.log(isAnagram('hello', 'world')); // false
console.log(isAnagram('abc', 'cba')); // true
