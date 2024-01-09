function sanitizeString(str) {
  return str.toLowerCase().replace(/[^a-z\d]/g, '');
}
function sortString(str) {
  return str.split('').sort().join('');
}
function isAnagram(str1, str2) {
  const sanitizedStr1 = sanitizeString(str1);
  const sanitizedStr2 = sanitizeString(str2);

  const sortedStr1 = sortString(sanitizedStr1);
  const sortedStr2 = sortString(sanitizedStr2);

  return sortedStr1 === sortedStr2;
}
const string1 = 'listen';
const string2 = 'silent';

if (isAnagram(string1, string2)) {
  console.log(string1 + ' and ' + string2 + ' are anagrams.');
} else {
  console.log(string1 + ' and ' + string2 + ' are not anagrams.');
}
listen and silent are anagrams.
