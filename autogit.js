function isAnagram(str1, str2) {
  // Remove non-alphanumeric characters and convert to lowercase
  str1 = str1.replace(/[^a-z0-9]/gi, '').toLowerCase();
  str2 = str2.replace(/[^a-z0-9]/gi, '').toLowerCase();

  // Convert strings to arrays of characters
  const arr1 = Array.from(str1);
  const arr2 = Array.from(str2);

  // Sort the arrays
  arr1.sort();
  arr2.sort();

  // Join sorted arrays back into strings
  const sortedStr1 = arr1.join('');
  const sortedStr2 = arr2.join('');

  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}

// Example usage
const string1 = 'listen';
const string2 = 'silent';
if (isAnagram(string1, string2)) {
  console.log(`"${string1}" and "${string2}" are anagrams.`);
} else {
  console.log(`"${string1}" and "${string2}" are not anagrams.`);
}
"listen" and "silent" are anagrams.
