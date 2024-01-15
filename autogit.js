function isAnagram(str1, str2) {
  // Convert strings to lowercase and remove whitespace
  str1 = str1.toLowerCase().replace(/\s+/g, '');
  str2 = str2.toLowerCase().replace(/\s+/g, '');

  // Convert strings to arrays and sort them
  const arr1 = str1.split('').sort();
  const arr2 = str2.split('').sort();

  // Compare sorted arrays
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}
const string1 = 'listen';
const string2 = 'silent';

console.log(isAnagram(string1, string2)); // Output: true
