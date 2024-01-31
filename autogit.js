function isAnagram(str1, str2) {
  // Remove non-alphabetic characters and convert to lowercase
  str1 = str1.toLowerCase().replace(/[^a-z]/g, '');
  str2 = str2.toLowerCase().replace(/[^a-z]/g, '');

  // Convert strings to arrays, sort them, and join them back into strings
  str1 = str1.split('').sort().join('');
  str2 = str2.split('').sort().join('');

  // Compare the sorted strings for equality
  return str1 === str2;
}

// Usage example
const string1 = "listen";
const string2 = "silent";

console.log(isAnagram(string1, string2)); // Output: true
