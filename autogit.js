function isAnagram(str1, str2) {
  // Remove any non-alphanumeric characters and convert to lowercase
  const cleanStr1 = str1.replace(/[^a-z0-9]/gi, '').toLowerCase();
  const cleanStr2 = str2.replace(/[^a-z0-9]/gi, '').toLowerCase();

  // Sort the characters of each string and compare the sorted strings
  const sortedStr1 = cleanStr1.split('').sort().join('');
  const sortedStr2 = cleanStr2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}

// Example usage:
console.log(isAnagram("listen", "silent")); // Output: true
console.log(isAnagram("hello", "bye")); // Output: false
