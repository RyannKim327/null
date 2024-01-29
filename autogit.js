function isAnagram(str1, str2) {
  // Remove non-alphabetic characters and convert to lowercase
  str1 = str1.replace(/[^a-zA-Z]/g, '').toLowerCase();
  str2 = str2.replace(/[^a-zA-Z]/g, '').toLowerCase();

  // Convert strings to arrays and sort them
  const sorted1 = str1.split('').sort();
  const sorted2 = str2.split('').sort();

  // Compare the sorted arrays
  return sorted1.join('') === sorted2.join('');
}

// Example usage
const string1 = 'listen';
const string2 = 'silent';

console.log(isAnagram(string1, string2)); // Output: true
