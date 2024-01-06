function isAnagram(str1, str2) {
  // Convert strings to lowercase and remove non-alphanumeric characters
  str1 = str1.toLowerCase().replace(/[\W_]/g, '');
  str2 = str2.toLowerCase().replace(/[\W_]/g, '');

  // Sort the characters of both strings
  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');

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
