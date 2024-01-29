function isAnagram(str1, str2) {
  // convert strings to lowercase and remove spaces/punctuation
  str1 = str1.toLowerCase().replace(/[^\w]/g, '');
  str2 = str2.toLowerCase().replace(/[^\w]/g, '');

  // convert strings to arrays, sort, and convert back to strings
  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');

  // compare the sorted strings
  return sortedStr1 === sortedStr2;
}

// example usage
const string1 = 'listen';
const string2 = 'silent';
if (isAnagram(string1, string2)) {
  console.log('Strings are anagrams!');
} else {
  console.log('Strings are not anagrams.');
}
