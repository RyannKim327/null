function isAnagram(str1, str2) {
  // Convert strings to lowercase and remove non-alphabetic characters
  const cleanStr1 = str1.toLowerCase().replace(/[^a-z]/g, '');
  const cleanStr2 = str2.toLowerCase().replace(/[^a-z]/g, '');

  // Convert strings to character arrays
  const arr1 = cleanStr1.split('');
  const arr2 = cleanStr2.split('');

  // Sort arrays
  arr1.sort();
  arr2.sort();

  // Compare sorted arrays
  return arr1.join('') === arr2.join('');
}

// Example usage
const string1 = 'listen';
const string2 = 'silent';

if (isAnagram(string1, string2)) {
  console.log(`"${string1}" and "${string2}" are anagrams.`);
} else {
  console.log(`"${string1}" and "${string2}" are not anagrams.`);
}
