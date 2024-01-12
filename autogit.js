function areAnagrams(str1, str2) {
  // Convert both strings to lowercase and remove spaces
  str1 = str1.toLowerCase().replace(/\s/g, '');
  str2 = str2.toLowerCase().replace(/\s/g, '');

  // Sort the characters of both strings
  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');

  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}
const string1 = 'listen';
const string2 = 'silent';

if (areAnagrams(string1, string2)) {
  console.log('Strings are anagrams.');
} else {
  console.log('Strings are not anagrams.');
}
