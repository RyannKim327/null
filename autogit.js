function areAnagrams(str1, str2) {
  const sortedStr1 = str1.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
  const sortedStr2 = str2.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
  return sortedStr1 === sortedStr2;
}
const string1 = 'listen';
const string2 = 'silent';

if (areAnagrams(string1, string2)) {
  console.log('The strings are anagrams');
} else {
  console.log('The strings are not anagrams');
}
