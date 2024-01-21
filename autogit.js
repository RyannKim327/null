function areAnagrams(str1, str2) {
  // Convert both strings to lowercase and remove non-alphabetic characters
  str1 = str1.toLowerCase().replace(/[^a-z]/g, '');
  str2 = str2.toLowerCase().replace(/[^a-z]/g, '');

  // Sort both strings alphabetically
  str1 = str1.split('').sort().join('');
  str2 = str2.split('').sort().join('');

  // Compare the sorted strings
  return str1 === str2;
}

// Example usage:
const string1 = 'listen';
const string2 = 'silent';
console.log(areAnagrams(string1, string2)); // Output: true
