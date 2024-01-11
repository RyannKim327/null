function areAnagrams(str1, str2) {
  // Remove non-alphabetic characters and convert to lowercase
  str1 = str1.replace(/[^A-Za-z]/g, '').toLowerCase();
  str2 = str2.replace(/[^A-Za-z]/g, '').toLowerCase();

  // Convert strings to arrays, sort them, and convert back to strings
  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');

  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}

// Example usage
const string1 = 'listen';
const string2 = 'silent';

if (areAnagrams(string1, string2)) {
  console.log(`${string1} and ${string2} are anagrams.`);
} else {
  console.log(`${string1} and ${string2} are not anagrams.`);
}
listen and silent are anagrams.
