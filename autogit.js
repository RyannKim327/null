function isAnagram(str1, str2) {
  // Convert to lowercase and remove whitespace
  str1 = str1.toLowerCase().replace(/\s/g, '');
  str2 = str2.toLowerCase().replace(/\s/g, '');
  
  // Split strings into arrays, sort, and join back into strings
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
listen and silent are anagrams.
