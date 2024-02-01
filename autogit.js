function isAnagram(str1, str2) {
  // Convert strings to lowercase and remove non-alphabet characters
  str1 = str1.toLowerCase().replace(/[^a-z]/g, '');
  str2 = str2.toLowerCase().replace(/[^a-z]/g, '');
  
  // Sort the characters in both strings
  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');

  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}

// Example usage
const string1 = "listen";
const string2 = "silent";
console.log(isAnagram(string1, string2)); // Output: true
