function areAnagrams(str1, str2) {
  // Remove non-alphabetic characters and spaces
  str1 = str1.replace(/[^A-Za-z]/g, '').toLowerCase();
  str2 = str2.replace(/[^A-Za-z]/g, '').toLowerCase();

  // Sort the strings
  str1 = str1.split('').sort().join('');
  str2 = str2.split('').sort().join('');

  // Compare the sorted strings
  return str1 === str2;
}

// Example usage
const string1 = 'listen';
const string2 = 'silent';

if (areAnagrams(string1, string2)) {
  console.log('The strings are anagrams!');
} else {
  console.log('The strings are not anagrams.');
}
