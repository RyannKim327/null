function areAnagrams(string1, string2) {
  // Remove whitespace and convert to lowercase
  string1 = string1.replace(/\s/g, '').toLowerCase();
  string2 = string2.replace(/\s/g, '').toLowerCase();

  // Convert strings to sorted arrays of characters
  const sorted1 = string1.split('').sort();
  const sorted2 = string2.split('').sort();

  // Compare sorted arrays
  return sorted1.join('') === sorted2.join('');
}
const string1 = 'listen';
const string2 = 'silent';

if (areAnagrams(string1, string2)) {
  console.log('The strings are anagrams.');
} else {
  console.log('The strings are not anagrams.');
}
