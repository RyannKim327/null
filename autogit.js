function isAnagram(str1, str2) {
  // Convert strings to lowercase and remove non-alphabetic characters
  const cleanStr1 = str1.toLowerCase().replace(/[^a-z]/g, '');
  const cleanStr2 = str2.toLowerCase().replace(/[^a-z]/g, '');

  // Sort the characters of both strings
  const sortedStr1 = cleanStr1.split('').sort().join('');
  const sortedStr2 = cleanStr2.split('').sort().join('');

  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}

// Example usage
const string1 = "listen";
const string2 = "silent";

if (isAnagram(string1, string2)) {
  console.log("The strings are anagrams.");
} else {
  console.log("The strings are not anagrams.");
}
