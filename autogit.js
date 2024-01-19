function areAnagrams(str1, str2) {
  // Remove all non-alphanumeric characters and convert to lowercase
  const normalizeString = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Normalize both strings
  const normalizedStr1 = normalizeString(str1);
  const normalizedStr2 = normalizeString(str2);

  // Check if the sorted characters of the normalized strings match
  return normalizedStr1.split('').sort().join('') === normalizedStr2.split('').sort().join('');
}

// Example usage:
const string1 = 'Listen';
const string2 = 'Silent';

if (areAnagrams(string1, string2)) {
  console.log(`${string1} and ${string2} are anagrams.`);
} else {
  console.log(`${string1} and ${string2} are not anagrams.`);
}
