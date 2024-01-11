function isAnagram(str1, str2) {
  // Normalize strings and remove non-alphabet characters
  str1 = str1.toLowerCase().replace(/[^a-z]/g, '');
  str2 = str2.toLowerCase().replace(/[^a-z]/g, '');

  // Sort characters
  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');

  // Compare sorted strings
  return sortedStr1 === sortedStr2;
}

// Example usage
const string1 = 'listen';
const string2 = 'silent';

if (isAnagram(string1, string2)) {
  console.log(`${string1} and ${string2} are anagrams.`);
} else {
  console.log(`${string1} and ${string2} are not anagrams.`);
}
