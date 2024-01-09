function isAnagram(str1, str2) {
  // Remove non-alphabetic characters and convert to lowercase
  const cleanStr1 = str1.replace(/[^a-zA-Z]/g, '').toLowerCase();
  const cleanStr2 = str2.replace(/[^a-zA-Z]/g, '').toLowerCase();

  // Convert strings to character arrays, sort, and join back into strings
  const sortedStr1 = cleanStr1.split('').sort().join('');
  const sortedStr2 = cleanStr2.split('').sort().join('');

  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}

// Example usage
const string1 = 'listen';
const string2 = 'silent';

console.log(isAnagram(string1, string2)); // Output: true
