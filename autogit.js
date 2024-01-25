function isAnagram(str1, str2) {
  // Remove non-alphanumeric characters and convert to lowercase
  str1 = str1.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  str2 = str2.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  // Convert strings to arrays, sort them, and compare
  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');
  
  return sortedStr1 === sortedStr2;
}

// Example usage
const string1 = "anagram";
const string2 = "nagaram";
console.log(isAnagram(string1, string2)); // Output: true
