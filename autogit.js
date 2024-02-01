function isAnagram(str1, str2) {
  // Convert strings to lowercase and remove non-alphabetic characters
  const s1 = str1.toLowerCase().replace(/[^a-z]/g, '');
  const s2 = str2.toLowerCase().replace(/[^a-z]/g, '');

  // Sort the strings
  const sorted1 = s1.split('').sort().join('');
  const sorted2 = s2.split('').sort().join('');

  // Compare the sorted strings
  return sorted1 === sorted2;
}

// Example usage
const string1 = 'listen';
const string2 = 'silent';
console.log(isAnagram(string1, string2)); // Output: true
