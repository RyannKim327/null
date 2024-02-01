function cleanString(str) {
  return str.replace(/[^a-z]/gi, '').toLowerCase().split('').sort().join('');
}
function areAnagrams(str1, str2) {
  // Clean the strings
  const cleanedStr1 = cleanString(str1);
  const cleanedStr2 = cleanString(str2);

  // Compare the cleaned strings
  return cleanedStr1 === cleanedStr2;
}
const string1 = 'listen';
const string2 = 'silent';

if (areAnagrams(string1, string2)) {
  console.log(`${string1} and ${string2} are anagrams.`);
} else {
  console.log(`${string1} and ${string2} are not anagrams.`);
}
