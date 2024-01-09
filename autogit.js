function isAnagram(string1, string2) {
  // Remove non-alphabetic characters and convert to lowercase
  string1 = string1.replace(/[^a-zA-Z]/g, '').toLowerCase();
  string2 = string2.replace(/[^a-zA-Z]/g, '').toLowerCase();

  // Convert strings to character arrays and sort them
  const sortedString1 = string1.split('').sort().join('');
  const sortedString2 = string2.split('').sort().join('');

  // Compare the sorted arrays
  return sortedString1 === sortedString2;
}

// Example usage:
const string1 = 'listen';
const string2 = 'silent';

console.log(isAnagram(string1, string2)); // Output: true
