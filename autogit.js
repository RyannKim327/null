function areAnagrams(str1, str2) {
  // Convert strings to lowercase and remove non-alphabetic characters
  str1 = str1.toLowerCase().replace(/[^a-z]/g, '');
  str2 = str2.toLowerCase().replace(/[^a-z]/g, '');

  // Convert strings to arrays and sort the characters
  const arr1 = str1.split('').sort();
  const arr2 = str2.split('').sort();

  // Convert sorted arrays back to strings and compare them
  const sortedStr1 = arr1.join('');
  const sortedStr2 = arr2.join('');

  return sortedStr1 === sortedStr2;
}

// Example usage:
const string1 = 'listen';
const string2 = 'silent';

if (areAnagrams(string1, string2)) {
  console.log(`"${string1}" and "${string2}" are anagrams.`);
} else {
  console.log(`"${string1}" and "${string2}" are not anagrams.`);
}
