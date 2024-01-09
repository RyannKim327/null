function isAnagram(str1, str2) {
  // Convert both strings to lowercase and remove non-alphabetic characters
  str1 = str1.toLowerCase().replace(/[^a-z]/g, '');
  str2 = str2.toLowerCase().replace(/[^a-z]/g, '');

  // Convert strings to arrays and sort them
  const arr1 = str1.split('').sort();
  const arr2 = str2.split('').sort();

  // Compare sorted arrays
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

// Example usage
const string1 = 'listen';
const string2 = 'silent';

console.log(isAnagram(string1, string2)); // Output: true
