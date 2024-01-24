function areAnagrams(str1, str2) {
  // Convert both strings to lowercase and remove non-alphanumeric characters
  str1 = str1.toLowerCase().replace(/[^a-z0-9]/g, '');
  str2 = str2.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Sort the characters in both strings
  str1 = str1.split('').sort().join('');
  str2 = str2.split('').sort().join('');

  // Compare the sorted strings
  return str1 === str2;
}

// Example usage:
const string1 = 'listen';
const string2 = 'silent';

if (areAnagrams(string1, string2)) {
  console.log('The strings are anagrams.');
} else {
  console.log('The strings are not anagrams.');
}
