function isAnagram(str1, str2) {
  // Convert strings to lowercase and remove whitespace
  str1 = str1.toLowerCase().replace(/\s/g, '');
  str2 = str2.toLowerCase().replace(/\s/g, '');

  // Convert strings to arrays, sort them, and convert back to strings
  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');

  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}

// Example usage
const string1 = 'listen';
const string2 = 'silent';

console.log(isAnagram(string1, string2)); // Output: true
