function isAnagram(str1, str2) {
  // Remove non-alphabetic characters and convert to lowercase
  const cleanStr1 = str1.replace(/[^A-Za-z]/g, '').toLowerCase();
  const cleanStr2 = str2.replace(/[^A-Za-z]/g, '').toLowerCase();

  // Sort the characters of the strings
  const sortedStr1 = cleanStr1.split('').sort().join('');
  const sortedStr2 = cleanStr2.split('').sort().join('');

  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}

// Example of checking if two strings are anagrams
const string1 = 'listen';
const string2 = 'silent';

if (isAnagram(string1, string2)) {
  console.log(`${string1} and ${string2} are anagrams.`);
} else {
  console.log(`${string1} and ${string2} are not anagrams.`);
}
