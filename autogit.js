function isAnagram(str1, str2) {
  // Convert strings to lowercase and remove non-alphabetic characters and whitespace
  const normalizedStr1 = str1.toLowerCase().replace(/[^a-z0-9]/g, '');
  const normalizedStr2 = str2.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Sort the characters in the strings
  const sortedStr1 = normalizedStr1.split('').sort().join('');
  const sortedStr2 = normalizedStr2.split('').sort().join('');

  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}

// Example usage
const string1 = 'listen';
const string2 = 'silent';

console.log(isAnagram(string1, string2)); // Output: true
