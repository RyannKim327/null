function areAnagrams(str1, str2) {
  // Convert both strings to lowercase
  const lowerStr1 = str1.toLowerCase();
  const lowerStr2 = str2.toLowerCase();

  // Remove non-alphabetic characters and sort alphabets
  const sortedStr1 = lowerStr1.replace(/[^a-z]/g, '').split('').sort().join('');
  const sortedStr2 = lowerStr2.replace(/[^a-z]/g, '').split('').sort().join('');

  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}

// Example usage
const string1 = 'listen';
const string2 = 'silent';

if (areAnagrams(string1, string2)) {
  console.log(`${string1} and ${string2} are anagrams!`);
} else {
  console.log(`${string1} and ${string2} are not anagrams.`);
}
