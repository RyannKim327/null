function isAnagram(str1, str2) {
  // Convert strings to lowercase and remove non-alphabetic characters
  const normalize = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Convert strings to sorted arrays
  const sortedStr1 = normalize(str1).split('').sort();
  const sortedStr2 = normalize(str2).split('').sort();

  // Compare the sorted arrays
  return sortedStr1.join('') === sortedStr2.join('');
}

// Example usage
const string1 = 'listen';
const string2 = 'silent';
console.log(isAnagram(string1, string2)); // Output: true
